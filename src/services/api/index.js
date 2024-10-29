import axios from "axios";
import config from "../../config/config";
import { checkTokensValidation } from '../../util/checkTokensValidation';
import { extractDataFromResponse, parseApiErrorResponse } from "./api_utils";
import apisEndPoints from "./apis_routes";
import { getDeviceInfo } from '../../util/getDeviceInfo';
import reduxData from "../../util/useReduxData";
import { clearStore } from "../../util/clearStore";
import { store } from "../../redux/store";

const device = getDeviceInfo();

const defaultHeaders = {
	Accept: "application/json, text/plain, */*", // Corrected wildcard
	"Content-Type": "application/json",
	"Access-Control-Allow-Origin": "*", // Consider specifying allowed domains for security
	"Access-Control-Allow-Credentials": true,
	"Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE",
	"Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
	"X-Requested-With": "*",
	"environment": "LOCAL",
	"device-type": "WEB",
	"device-name": device.deviceName,
	"device-id": device.deviceId,
	"device-token": device.deviceId,
	"os-version": device.appVersion,
	"device-platform": device.devicePlatform,
};

/**
 * Calls the API and handles the response and errors.
 * @param {Object} options - Options for the API call.
 * @returns {Promise<Object>} - Result of the API call or error.
 */
const callApi = async ({ method, url, data, successCode = 200, successStatus = true, showSuccessToast = false, showErrorToast = false, isAuthApi = false }) => {
	const { access, refresh } = checkTokensValidation();
	const device = store.getState().device;

	// Prevent API call if tokens are not valid and it's not an auth API call
	if (!refresh && !isAuthApi) {
		return;
	}

	const headers = { ...defaultHeaders };
	if (isAuthApi) {
		headers['Authorization'] = `Bearer ${access}`;
	}
	if (device._id) {
		headers['device_id'] = device._id;
	}

	try {
		const response = await axios({ baseURL: config.base_url, timeout: 5000, headers, data, url, method });
		return extractDataFromResponse({ response, showErrorToast, showSuccessToast, successCode, successStatus });
	} catch (error) {
		const errorResponse = parseApiErrorResponse({ error, showToast: showErrorToast });

		if (errorResponse?.statusCode === 401) {
			// If unauthorized, attempt to refresh tokens
			return await handleRefreshTokenApi({ method, url, data, isAuthApi, showErrorToast, showSuccessToast, successCode, successStatus }, refresh);
		}
		return Promise.resolve(errorResponse);
	}
};

/**
 * Handles refreshing the token API call.
 * @param {Object} apiOptions - Options for the API call.
 * @param {string} refreshToken - The refresh token.
 * @returns {Promise<Object>} - Result of the API call or clears store on error.
 */
const handleRefreshTokenApi = async (apiOptions, refreshToken) => {
	try {
		const response = await authApi().refreshToken({ refreshToken });
		reduxData('tokens', 'set')(response);
		return await callApi(apiOptions);
	} catch (error) {
		clearStore();
		return Promise.reject(error);
	}
};

/**
 * Auth API functions
 */
export const authApi = () => {
	const register = async (body = { email: "", password: "", name: "", contact_number: "" }) => {
		return await callApi({ ...apisEndPoints.auth.register, data: body });
	};

	const login = async (body = { email: "", password: "" }) => {
		return await callApi({ ...apisEndPoints.auth.login, data: body });
	};

	const logout = async (body = { refreshToken: "" }) => {
		return await callApi({ ...apisEndPoints.auth.logout, data: body });
	};

	const refreshToken = async (body = { refreshToken: "" }) => {
		return await callApi({ ...apisEndPoints.auth.refreshTokens, data: body });
	};

	const forgotPassword = async (body = { email: "" }) => {
		return await callApi({ ...apisEndPoints.auth.forgotPassword, data: body });
	};

	const resetPassword = async (body = { token: "", password: "" }) => {
		return await callApi({ ...apisEndPoints.auth.resetPassword, data: body });
	};

	return {
		register,
		login,
		logout,
		refreshToken,
		forgotPassword,
		resetPassword,
	};
};

/**
 * Example API functions
 */
export const exampleApi = () => {
	const getExampleById = async (id) => {
		return await callApi({ ...apisEndPoints['other-api-path-example'].getExampleById(id) });
	};

	return {
		getExampleById,
	};
};

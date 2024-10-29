import moment from "moment";
import { store } from "../redux/store";

/**
 * Checks token validity and returns token status for application use.
 * @returns {Object} - Token information and expiration statuses.
 */
export const checkTokensValidation = () => {
  const tokens = store.getState().tokens;

  // Access and refresh tokens, if available
  const accessToken = tokens?.access?.token || null;
  const refreshToken = tokens?.refresh?.token || null;

  // Check if access token has expired
  const isAccessExpired = accessToken
    ? moment(tokens.access.expires).isBefore(moment())
    : false;

  // Check if refresh token has expired
  const isRefreshExpired = refreshToken
    ? moment(tokens.refresh.expires).isBefore(moment())
    : false;

  // Determine token refresh necessity:
  // 1: Access token expired, requires refresh
  // 0: Tokens valid, no refresh needed
  // -1: Refresh token expired, redirect to login
  const shouldRefreshStatus = !isRefreshExpired
    ? (isAccessExpired ? 1 : 0)
    : -1;

  return {
    tokens,
    accessToken,
    refreshToken,
    isAccessExpired,
    isRefreshExpired,
    shouldRefreshStatus,
    isLoggedIn: !!refreshToken && !isRefreshExpired, // True if logged in and refresh token valid
  };
};

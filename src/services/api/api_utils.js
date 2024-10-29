import { toast } from 'react-toastify';

/**
 * Extracts data from API response and handles success/error cases.
 * @param {Object} params - Response parameters.
 * @returns {Object} - Extracted data or throws an error.
 */
export const extractDataFromResponse = ({
  response,
  successCode = 200,
  successStatus = true,
  showSuccessToast = true,
  showErrorToast = true,
}) => {
  const data = response?.data.data || {};
  const responseStatus = response?.data?.status;
  const responseCode = response?.status || response?.data?.statusCode;

  if (responseCode === successCode && responseStatus === successStatus) {
    if (showSuccessToast) {
      toast.success(response.data.message);
    }
    return data;
  }

  if (showErrorToast) {
    toast.error(response.data.message);
  }

  data.error = true;
  throw data;
};

/**
 * Parses and returns an error response from the API.
 * @param {Object} params - Error parameters.
 * @returns {Object} - Parsed error data.
 */
export const parseApiErrorResponse = ({ error, showToast = true }) => {
  let showErrorToastMessage = error.message || 'Something went wrong, Please try again later.';
  let returnData = { error: true };
  const response = error.response;

  if (response) {
    const data = response?.data ?? {};
    data.error = true;
    showErrorToastMessage = data.message;
    returnData = data;
  }

  if (showToast) {
    toast.error(showErrorToastMessage);
  }

  return returnData;
};

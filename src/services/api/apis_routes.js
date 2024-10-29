// API endpoint configuration
export default {
  auth: {
    register: {
      url: "/auth/register",
      method: "post",
      successCode: 201,
      isAuthApi: true,
      showSuccessToast: false,
      showErrorToast: false,
    },
    login: {
      url: "/auth/login",
      method: "post",
      successCode: 200,
      isAuthApi: true,
      showSuccessToast: false,
      showErrorToast: false,
    },
    logout: {
      url: "/auth/logout",
      method: "post",
      successCode: 200,
      isAuthApi: true,
      showSuccessToast: false,
      showErrorToast: false,
    },
    refreshTokens: {
      url: "/auth/refresh-tokens",
      method: "post",
      successCode: 200,
      isAuthApi: true,
      showSuccessToast: false,
      showErrorToast: false,
    },
    forgotPassword: {
      url: "/auth/forgot-password",
      method: "post",
      successCode: 200,
      isAuthApi: true,
      showSuccessToast: false,
      showErrorToast: false,
    },
    resetPassword: {
      url: "/auth/reset-password",
      method: "post",
      successCode: 200,
      isAuthApi: true,
      showSuccessToast: false,
      showErrorToast: false,
    },
  },
  "other-api-path-example": {
    getExampleById: (id) => ({
      url: `/other-api-path-example/${id}`,
      method: "get",
      successCode: 200,
      isAuthApi: false,
      showSuccessToast: false,
      showErrorToast: false,
    }),
  },
};

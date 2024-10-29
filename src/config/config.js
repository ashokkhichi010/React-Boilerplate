/**
 * Configuration settings for the application.
 */
const config = {
  base_url: process.env.BASE_URL || "http://192.168.29.90:4000",   // Base URL for the API
  server: process.env.SERVER_URL || "http://192.168.29.90:4000",   // Server URL for socket connections
  origin: process.env.ORIGIN_URL || "http://192.168.29.90:3001",   // Origin URL for CORS

  // Redux slices configuration
  slices: [
    { name: "tokens", initialValue: {} },          // Token storage
    { name: "profile", initialValue: {} },         // User profile information
    { name: "device", initialValue: {} },          // Device information
    { name: "isServerConnected", initialValue: false }, // Server connection status
    { name: "clientId", initialValue: null },      // Client ID for socket connection
    { name: "callInfo", initialValue: null },      // Information about API calls
    { name: "theme", initialValue: "system" },     // Application theme
  ]
};

export default config;

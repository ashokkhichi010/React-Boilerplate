const uuid = require("uuid").v4;
const Storage = require("versioned-storage");

/**
 * Retrieves and stores device information, including platform, name, language, and version.
 * Generates a unique ID if one doesn't exist.
 * @returns {Object} - An object containing device information.
 */
export const getDeviceInfo = () => {
// Retrieve basic device information
  const devicePlatform = navigator.platform;
  const deviceName = navigator.appName;
  const deviceLanguage = navigator.language;
  const appVersion = navigator.appVersion.split(" ")[0];

  // Initialize versioned storage with platform and app version
  const storage = new Storage(devicePlatform, appVersion);

  // Retrieve or generate a device ID
  let deviceId = storage.read();
  if (!deviceId) {
    deviceId = uuid();
    storage.write(deviceId);
  }

  // Construct the device information object
  return {
    devicePlatform,
    deviceName,
    localeCode: deviceLanguage.startsWith("en") ? "en" : deviceLanguage,
    deviceId,
    appVersion,
  };
};

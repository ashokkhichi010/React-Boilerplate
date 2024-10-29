import config from "../config/config";
import reduxData from "./useReduxData";

/**
 * Clears all specified slices in the Redux store by calling reduxData with 'clear' action.
 */
export const clearStore = () => {
	// Ensure slices array is defined before attempting to clear store
	const slicesArray = config.slices || [];

	// Clear each specified slice in the Redux store
	slicesArray.forEach(slice => {
		reduxData(slice.name, "clear");
	});
};

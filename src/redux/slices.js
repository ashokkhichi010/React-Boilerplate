import { createSlice } from "@reduxjs/toolkit";
import { set, add, replace, remove, clear } from "./commonReducers";

/**
 * Creates a common slice with default reducers.
 * @param {string} sliceName - The name of the slice.
 * @param {any} initialValue - The initial state value for the slice.
 * @returns {Object} - Actions and reducer for the slice.
 */
const commonSlices = (sliceName, initialValue) => {
	const slice = createSlice({
		initialState: initialValue,
		name: sliceName,
		reducers: {
			set,
			add,
			replace,
			remove,
			clear: clear(initialValue), // Using the clear function
		},
	});

	return {
		...slice.actions,
		reducer: slice.reducer,
	};
};

export default commonSlices;

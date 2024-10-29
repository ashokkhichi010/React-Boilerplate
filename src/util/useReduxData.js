import commonSlices from "../redux/slices";
import { store } from "../redux/store";

/**
 * A utility function to handle common Redux actions for different slices.
 * @param {string} slice - The name of the Redux slice.
 * @param {string} method - The method to be performed on the slice (set, add, replace, remove, clear).
 * @returns {Function|void} - Returns a function for actions that require data, or void for others.
 * @throws {Error} - Throws an error for invalid method types.
 */
const reduxData = (slice, method) => {
  const { set, add, replace, clear, remove } = commonSlices(slice);

  switch (method) {
    case "set": {
      // Dispatch the 'set' action with provided data
      return (data) => {
        store.dispatch(set(data));
      };
    }
    case "add": {
      // Dispatch the 'add' action with provided data
      return (data) => {
        store.dispatch(add(data));
      };
    }
    case "replace": {
      // Dispatch the 'replace' action with provided key, data, and optional value
      return (key, data, value = null) => {
        return store.dispatch(replace({ key, data, value }));
      };
    }
    case "remove": {
      // Dispatch the 'remove' action with provided key and value
      return (key, value) => {
        return store.dispatch(remove({ key, value }));
      };
    }
    case "clear": {
      // Dispatch the 'clear' action to clear the slice data
      return store.dispatch(clear());
    }
    default: {
      // Throw an error if the method is invalid
      throw new Error(`Invalid method: ${method}. Expected one of: set, add, replace, remove, clear.`);
    }
  }
};

export default reduxData;

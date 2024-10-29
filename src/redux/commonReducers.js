/**
 * Sets the state to the payload.
 * @param {any} state - The current state.
 * @param {Object} action - The action object containing the payload.
 * @returns {any} - The new state.
 */
export const set = (state, action) => {
  return action.payload; // Return a new state
};

/**
 * Adds a new item to the state array.
 * @param {Array} state - The current state array.
 * @param {Object} action - The action object containing the payload.
 * @returns {Array} - The new state array.
 */
export const add = (state, action) => {
  return state?.length ? [action.payload, ...state] : [action.payload];
};

/**
 * Replaces an item in the state array or adds a new item if not found.
 * @param {Array} state - The current state array.
 * @param {Object} action - The action object containing the payload.
 * @returns {Array} - The new state array.
 */
export const replace = (state, action) => {
  const { key, value, data, isAdd = false } = action.payload;

  const newData = state?.map((row) => {
    return (value || data[key]) === row[key] ? data : row; // Replace or retain row
  });

  // If not replaced and isAdd is true, add data to the beginning of the new array
  return newData.some((row) => (value || data[key]) === row[key]) ? newData : isAdd ? [data, ...newData] : newData;
};

/**
 * Removes an item from the state array based on a specific key-value pair.
 * @param {Array} state - The current state array.
 * @param {Object} action - The action object containing the payload.
 * @returns {Array} - The new state array.
 */
export const remove = (state, action) => {
  const { key, value } = action.payload;

  return state?.filter((row) => value !== row[key]) || []; // Return a new state array
};

/**
 * Clears the state and resets it to the initial value.
 * @param {any} initialValue - The initial value to reset the state to.
 * @returns {Function} - The reducer function to clear the state.
 */
export const clear = (initialValue) => () => initialValue; // Simplified clear function

/**
 * Formats a given number to a string with two decimal places, using en-US locale.
 * @param {number|string} number - The number to format.
 * @returns {string} - Formatted number as a string with two decimal places.
 */
export const getFormattedNumber = (number) => {
  // Attempt to parse the input to a floating-point number
  const parsedNumber = parseFloat(number);

  // Return '0.00' if the input is not a valid number
  if (isNaN(parsedNumber)) return '0.00';

  // Format the number with two decimal places
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parsedNumber);
};

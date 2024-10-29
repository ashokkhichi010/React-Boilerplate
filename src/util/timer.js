import * as moment from 'moment';

//  this is my code
// const getTimer = (callTime) => moment(callTime * 1000).format('hh:mm:ss').split(':').map((val, index) => index === 0 ? parseInt(val) - 5 : (index === 1 ? parseInt(val) - 30 : val)).join(":");

//  this is Chat gpt's code

/**
 * Converts a given call time in seconds to a formatted timer string (hh:mm:ss).
 * Allows for adjusting hours and minutes.
 * @param {number} callTime - The call time in seconds.
 * @param {number} hourAdjustment - Optional number of hours to adjust (default is 0).
 * @param {number} minuteAdjustment - Optional number of minutes to adjust (default is 0).
 * @returns {string} - The formatted timer string.
 */
export const getTimer = (callTime, hourAdjustment = 0, minuteAdjustment = 0) => {
	// Calculate total duration in milliseconds
	const duration = moment.duration(callTime * 1000);

	// Adjust hours and minutes based on provided adjustments
	const hours = (duration.hours() + hourAdjustment).toString().padStart(2, '0');
	const minutes = (duration.minutes() + minuteAdjustment).toString().padStart(2, '0');
	const seconds = duration.seconds().toString().padStart(2, '0');

	return `${hours}:${minutes}:${seconds}`;
};

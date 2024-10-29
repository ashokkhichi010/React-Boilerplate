import reduxData from '../../util/useReduxData';
import { showNotification } from '../../util/showNotification';

export class Handler {
	constructor(socket, theme) {
		this.socket = socket;
		this.theme = theme;
	}

	/**
	 * Sets the Redux state indicating the server connection status and client ID.
	 */
	connect = () => {
		reduxData("isServerConnected", "set")(true);
		reduxData("clientId", "set")(this.socket.id);
	}

	/**
	 * Handles incoming notifications.
	 * @param {Object} data - The notification data.
	 * @param {Function} callback - Callback to execute after processing the notification.
	 */
	notification = (data, callback) => {
		const notification = data?.notification;

		if (notification) {
			showNotification({ ...notification, type: "success", theme: this.theme });
		}

		callback({ success: true });
	}
}

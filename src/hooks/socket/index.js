import { useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';
import config from "../../config/config";
import { useTheme } from '@mui/material';
import { Emiter } from './emiter';
import { Handler } from './handler';

const SOCKET_SERVER_URL = config.server;
let mainSocket = null;

const useSocket = () => {
	const theme = useTheme();
	const [socket, setSocket] = useState(null);
	const emiter = new Emiter(mainSocket);
	const handler = new Handler(mainSocket, theme);

	/**
	 * Connects to the socket server using the provided refresh token.
	 * @param {string} refreshToken - The token used for authentication.
	 */
	const connectSocket = useCallback((refreshToken) => {
		const options = {
			auth: { token: refreshToken },
			transports: ["websocket"],
			cors: {
				origin: config.origin,
				methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
				allowedHeaders: ["Authorization"],
				credentials: false,
			}
		};

		// Connect if there is no active socket connection
		if (!socket || !socket.connected) {
			const newSocket = io(SOCKET_SERVER_URL, options);
			setSocket(newSocket);
			mainSocket = newSocket; // Store the main socket reference
		}
	}, [socket]);

	/**
	 * Disconnects from the socket server and resets the socket state.
	 */
	const disconnectSocket = useCallback(() => {
		mainSocket?.disconnect();
		setSocket(null); // Reset the socket state on disconnect
	}, []);

	useEffect(() => {
		if (socket) {
			socket.on("connect", handler.connect);
			socket.on("notification", handler.notification);

			// Cleanup on component unmount
			return () => {
				socket.off("connect", handler.connect);
				socket.off("notification", handler.notification);
			};
		}
	}, [socket, handler]);

	return {
		connectSocket,
		socket,
		disconnectSocket,
		emitExample: emiter.emitExample,
	};
};

export default useSocket;

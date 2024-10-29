import React from 'react';
import { toast } from 'react-toastify';
import { Box, Typography, useTheme } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import notificationSound from '../assets/audio/standard-whatsapp.mp3';

/**
 * Component to display a notification box with an icon and message.
 * @param {Object} props - Component props.
 * @param {string} props.title - The title of the notification.
 * @param {string} props.body - The body text of the notification.
 * @returns {JSX.Element} - A styled notification box.
 */
const NotificationBox = ({ title, body }) => {
	const theme = useTheme(); // Use the custom hook to get the current theme

	// Play notification sound when the component mounts
	React.useEffect(() => {
		const audio = new Audio(notificationSound);
		audio.play().catch((error) => console.error('Error playing audio:', error));
	}, []); // Empty dependency array ensures this runs only on mount

	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<MessageIcon
				sx={{
					color: theme.palette.success.main,
					fontSize: '24px',
					marginRight: '10px',
				}}
			/>
			<Box>
				<Typography
					component="h1"
					sx={{
						fontSize: '16px',
						fontWeight: '600',
						marginBottom: '3px',
						color: theme.palette.text.primary,
					}}
				>
					{title}
				</Typography>
				<Typography
					component="p"
					sx={{
						fontSize: '14px',
						fontWeight: '400',
						color: theme.palette.text.secondary,
					}}
				>
					{body}
				</Typography>
			</Box>
		</Box>
	);
};

/**
 * Shows a notification with the specified title and body.
 * @param {Object} options - Notification options.
 * @param {string} options.title - Title of the notification.
 * @param {string} options.body - Body text of the notification.
 * @param {string} [options.type="success"] - Type of notification (success, error, info, etc.).
 * @param {Object} [options.theme={}] - Theme overrides for the notification.
 */
export const showNotification = ({ title, body, type = "success", theme = {} }) => {
	toast(
		<NotificationBox title={title} body={body} />,
		{
			position: 'top-center',
			autoClose: 5000, // Duration for auto-close
			type, // Default to "success" if type not provided
			closeButton: false,
			icon: false,
			progressStyle: { background: theme.palette.primary?.main || "blue" },
			style: {
				background: theme.palette.background?.default || "transparent",
				boxShadow: theme.shadows ? theme.shadows[4] : "none",
			},
		}
	);
};

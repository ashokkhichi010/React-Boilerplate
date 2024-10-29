import { Box, Typography, CircularProgress } from '@mui/material';
import React from 'react';

const Dashboard = ({ isLoading }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				height: "100%",
			}}
		>
			{
				isLoading
					? <CircularProgress />
					: <Typography variant="h4" sx={{ fontWeight: 600 }}>    Welcome to the Dashboard    </Typography>
			}
		</Box>
	);
};

export default Dashboard;

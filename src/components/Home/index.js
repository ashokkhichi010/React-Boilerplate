import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh", // Use full viewport height
        backgroundColor: (theme) => theme.palette.background.default, // Optional: Set background color
        padding: 2, // Add padding for spacing
        transition: 'background-color 0.3s ease', // Smooth background color transition
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
          color: (theme) => theme.palette.text.primary // Ensure color fits the theme
        }}
      >
        Welcome to the React Boilerplate
      </Typography>
    </Box>
  );
};

export default Home;

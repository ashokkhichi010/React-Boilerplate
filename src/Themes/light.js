import { createTheme } from '@mui/material/styles';

// Light theme configuration for Material-UI
const lightTheme = createTheme({
  palette: {
    mode: "light", // Set the theme mode to light
    primary: {
      main: "#5900d0", // Main primary color
      light: "#5900d024", // Light variant of the primary color
      dark: "#250057", // Dark variant of the primary color
    },
    secondary: {
      main: "#8c27f2", // Main secondary color
      light: "#5900d024", // Light variant of the secondary color
      dark: "#250057", // Dark variant of the secondary color
    },
    background: {
      default: "#FFFFFF", // Default background color
      paper: "#e2d3f757", // Background color for paper elements
    },
    text: {
      primary: "#000000", // Primary text color
      secondary: "#FFFFFF", // Secondary text color
    },
    link: {
      main: "#5900d0", // Main color for links
    },
  },
  typography: {
    button: {
      textTransform: "none", // Disable text transformation for buttons
    },
    allVariants: {
      color: "inherit", // Inherit color for all typography variants
    },
    fontFamily: "system-ui", // Set the font family to system UI
    h6: { fontSize: 16 }, // H6 heading size
    subtitle1: { fontSize: 18, fontWeight: 600, color: "#000000cf", textWrap: "nowrap" }, // Subtitle 1 styling
    subtitle2: { fontSize: 14, color: "#7e7c7cca", textWrap: "nowrap" }, // Subtitle 2 styling
  },
  shadows: [
    "none", // No shadow for 0
    "0px 1px 3px rgba(0, 0, 0, 0.2)", // Shadow for 1
    "0px 1px 5px rgba(0, 0, 0, 0.2)", // Shadow for 2
    "0px 1px 8px rgba(0, 0, 0, 0.2)", // Shadow for 3
    "0px 1px 14px rgba(0, 0, 0, 0.2)", // Shadow for 4
    "0px 1px 20px rgba(0, 0, 0, 0.2)", // Shadow for 5
    "0px 1px 28px rgba(0, 0, 0, 0.2)", // Shadow for 6
    "0px 1px 38px rgba(0, 0, 0, 0.2)", // Shadow for 7
    "0px 1px 48px rgba(0, 0, 0, 0.2)", // Shadow for 8
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Global styles for anchor elements
        a: {
          color: '#5900d0', // Link color from theme
          textDecoration: 'none', // No underline by default
          '&:hover': {
            textDecoration: 'underline', // Underline on hover
          },
        },
      },
    },
  },
});

export default lightTheme;

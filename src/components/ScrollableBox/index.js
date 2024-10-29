import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ScrollableBox = styled(Box)(({ theme, height = "calc(83vh)", scrollbarColor = theme.palette.primary.main }) => ({
  height: height,
  overflow: 'auto', // Customize as needed
  "&::-webkit-scrollbar": {
    width: "0.2em",
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "4px",
    backgroundColor: scrollbarColor,
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.dark, // Darker color for hover effect
  },
  "&::-moz-scrollbar": { // For Firefox
    width: "0.2em",
  },
  "&::-moz-scrollbar-thumb": {
    borderRadius: "4px",
    backgroundColor: scrollbarColor,
  },
  "&:hover::-moz-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default ScrollableBox;

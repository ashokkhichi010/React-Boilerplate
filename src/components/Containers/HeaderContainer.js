import { Box } from "@mui/material";
import Sidebar from "../Sidebar"; // Import Sidebar component

// HeaderContainer component for wrapping header elements
const HeaderContainer = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        boxShadow: theme.shadows[4],
        display: "flex",
      })}
    >
      <Sidebar showMenuIcon={true} />
      {children}
    </Box>
  );
};

export default HeaderContainer;

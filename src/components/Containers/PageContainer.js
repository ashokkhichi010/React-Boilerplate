import { Box } from "@mui/material";

// PageContainer component for wrapping page content
const PageContainer = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        margin: { xs: '0px', sm: theme.spacing(1) },
        height: `calc(100vh - 48px - ${theme.spacing(2)})`,
        color: theme.palette.text.primary,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: theme.shadows[4],
        borderRadius: theme.shape.borderRadius,
      })}
    >
      {children}
    </Box>
  );
};

export default PageContainer;

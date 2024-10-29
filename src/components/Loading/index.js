import { Box, CircularProgress, Skeleton } from "@mui/material";

// Loading Component
const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <CircularProgress size={54} thickness={4} color="secondary" />
    </Box>
  );
};

export default Loading;

// SkeletonLoader Component
export const SkeletonLoader = ({ width = 210, height = 60, circularSize = 40 }) => {
  return (
    <>
      <Skeleton variant="text" sx={{ fontSize: '1rem', width }} />
      <Skeleton variant="circular" width={circularSize} height={circularSize} />
      <Skeleton variant="rectangular" width={width} height={height} />
      <Skeleton variant="rounded" width={width} height={height} />
    </>
  );
};

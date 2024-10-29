import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

// Styled Badge component with ripple effect
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700", // Online status color
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

// BadgeAvatars component for displaying user avatar with online status indicator
const BadgeAvatars = ({
  invisible = true,
  userImage,
  userName,
  sx = { width: "40px", height: "40px", borderRadius: "50%" }
}) => (
  <StyledBadge
    overlap="circular"
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    variant="dot"
    color="primary"
    invisible={invisible} // Use visibility prop for badge
  >
    <Avatar
      src={userImage || "https://th.bing.com/th/id/OIP.ZahdYtqw9ZFMwBETtb5RkwAAAA?rs=1&pid=ImgDetMain"}
      alt={userName}
      sx={sx} // Style applied to the avatar
    />
  </StyledBadge>
);

export default BadgeAvatars;

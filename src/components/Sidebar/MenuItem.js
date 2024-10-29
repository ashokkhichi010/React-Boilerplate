import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

// MenuItem component for rendering individual menu items
const MenuItem = ({ icon, text, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default MenuItem;

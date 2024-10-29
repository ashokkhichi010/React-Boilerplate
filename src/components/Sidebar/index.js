import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Drawer, List, Typography, Box, IconButton } from "@mui/material";
import { Settings, WbSunny, UpdateSharp, Logout, Brightness4, Menu, Dashboard } from "@mui/icons-material";
import MenuItem from "./MenuItem";
import BadgeAvatars from "../Avatar/BadgeAvatars";
import reduxData from "../../util/useReduxData";
import { clearStore } from "../../util/clearStore";
import ScrollableBox from "../ScrollableBox";

// Sidebar component for navigation
const Sidebar = ({ showMenuIcon }) => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);
  const themeMode = useSelector((state) => state.theme);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSwitchingTheme, setIsSwitchingTheme] = useState(false);

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // Navigation handlers
  const handleNavigate = (path) => {
    toggleDrawer();
    navigate(path);
  };

  const handleLogout = async () => {
    await clearStore(); // Ensure this returns a promise for error handling
    toggleDrawer();
    navigate('/');
  };

  const handleThemeChange = useCallback(() => {
    setIsSwitchingTheme(true);
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    reduxData("theme", "set")(newThemeMode);
    setTimeout(() => setIsSwitchingTheme(false), 500);
  }, [themeMode]);

  showMenuIcon = showMenuIcon && Object.keys(profile).length > 0;

  return (
    <>
      {showMenuIcon && (
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            position: 'absolute',
            transform: 'translateX(50%) translateY(10%)'
          }}
          onClick={toggleDrawer}
        >
          <Menu />
        </IconButton>
      )}

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          sx={(theme) => ({
            width: 250,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: theme.palette.background.default,
          })}
          role="presentation"
        >
          <Box
            sx={(theme) => ({
              padding: "16px",
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.contrastText
            })}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", marginBottom: "10px" }}>
              <BadgeAvatars userImage={profile?.image} userName={profile?.name} invisible={true} sx={{ width: "70px", height: "70px" }} />
              <IconButton onClick={handleThemeChange} aria-label="toggle theme" sx={{ alignSelf: "start" }}>
                {themeMode === 'light' ? <Brightness4 /> : <WbSunny />}
              </IconButton>
            </Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {profile?.name?.toUpperCase()}
            </Typography>
            <Typography variant="body2">
              {`+${profile?.contactNumber?.countryCode} ${profile?.contactNumber?.phoneNumber}`}
            </Typography>
          </Box>
          <ScrollableBox>
            <List sx={{ cursor: "pointer" }}>
              <MenuItem icon={<Dashboard />} text="Dashboard" onClick={() => handleNavigate('/')} />
              <MenuItem icon={<UpdateSharp />} text="Change Password" onClick={() => handleNavigate('/contacts/change-password')} />
              <MenuItem icon={<Settings />} text="Settings" onClick={() => { /* Add functionality here */ }} />
              <MenuItem icon={<Logout />} text="Logout" onClick={handleLogout} />
            </List>
          </ScrollableBox>
        </Box>
      </Drawer>

      {/* Theme switching overlay */}
      {isSwitchingTheme && (
        <Box
          sx={(theme) => ({
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: themeMode === "dark" ? "#000000" : "#ffffff",
            color: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
            transition: "background-color 0.5s ease-in-out", // Reduced transition time
            flexDirection: "column",
          })}
        >
          {themeMode === 'dark' ? <Brightness4 sx={{ fontSize: "100px" }} /> : <WbSunny sx={{ fontSize: "100px" }} />}
          <Typography variant="h5">
            Switching to {themeMode === "dark" ? "Dark" : "Light"} mode...
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Sidebar;

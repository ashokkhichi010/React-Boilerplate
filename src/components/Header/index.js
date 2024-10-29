import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import ProfileImage from './ProfileImage';
import { checkTokensValidation } from '../../util/checkTokensValidation';
import { useSelector } from 'react-redux';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuPosition, setMenuPosition] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isMobile = useMediaQuery("(max-width:599px)");

  const profile = useSelector((state) => state.profile);
  const { isLoggedIn } = checkTokensValidation();

  useEffect(() => {
    setIsAuthenticated(isLoggedIn);
  }, [isLoggedIn, profile]);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuPosition({
      mouseX: event.clientX,
      mouseY: event.clientY,
    });
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width: isMobile && isAuthenticated ? "auto" : '80%',
        margin: 'auto',
        color: "white",
        minHeight: "45px",
      }}
    >
      <Typography sx={{ flexGrow: 1 }}>
        <Link to="/" style={{ color: 'inherit', fontWeight: 800 }}>
          LOGO
        </Link>
      </Typography>
      {isAuthenticated ? (
        !isMobile && (
          <ProfileImage
            menuPosition={menuPosition}
            anchorEl={anchorEl}
            handleCloseMenu={handleCloseMenu}
            handleOpenMenu={handleOpenMenu}
          />
        )
      ) : (
        <>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/signup">Signup</Button>
        </>
      )}
    </Box>
  );
};

export default Header;

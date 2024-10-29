import React from 'react';
import { Modal, Box, Typography, IconButton, Button } from '@mui/material';
import { Close } from '@mui/icons-material';

// Custom Modal Component
const GlobalModal = ({
  isOpen,
  toggle,
  title,
  children,
  headerContent = null,
  footerContent = null,
  showCloseInHeader = true,
  showCloseInFooter = false,
  topIconSrc,
  sx = {},
}) => {

  const HeaderIcon = () => (
    <Box
      sx={(theme) => ({
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '200px',
        bgcolor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 3,
        zIndex: 1
      })}
    >
      <img src={topIconSrc} alt="icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
    </Box>
  );

  const HeaderCloseButton = () => (
    <IconButton
      sx={(theme) => ({ margin: 0, padding: 0, color: theme.palette.text.secondary })}
      onClick={toggle}
      aria-label="close modal"
    >
      <Close />
    </IconButton>
  );

  const FooterCloseButton = () => (
    <Button variant="contained" onClick={toggle}>
      Close
    </Button>
  );

  const Header = () => (
    <Box
      sx={(theme) => ({
        display: 'flex',
        textAlign: showCloseInHeader ? "left" : "center",
        justifyContent: showCloseInHeader ? 'space-between' : "center",
        borderBottom: '1px solid #ddd',
        padding: '10px 20px',
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.primary.main,
      })}
    >
      {title ? <Typography variant="h6">{title}</Typography> : headerContent}
      {showCloseInHeader && <HeaderCloseButton />}
    </Box>
  );

  const Footer = () => (
    <Box
      sx={{
        borderTop: '1px solid #ddd',
        padding: '10px 16px',
        display: 'flex',
        justifyContent: showCloseInFooter ? 'space-between' : 'flex-end',
        alignItems: 'center',
      }}
    >
      {footerContent}
      {showCloseInFooter && <FooterCloseButton />}
    </Box>
  );

  return (
    <Modal open={isOpen} onClose={toggle}>
      <Box
        sx={(theme) => ({
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: "500px",
          width: { xs: '95%', sm: '80%', md: '80%', lg: '80%' },
          backgroundColor: theme.palette.background.default,
          boxShadow: theme.shadows[1],
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.text.primary,
          overflow: 'hidden',
        })}
      >
        {topIconSrc && <HeaderIcon />}
        {(title || headerContent) && <Header />}
        <Box sx={{ padding: '16px', maxHeight: '70vh', overflowY: 'auto', ...sx }}>
          {children}
        </Box>
        {footerContent && <Footer />}
      </Box>
    </Modal>
  );
};

export default GlobalModal;

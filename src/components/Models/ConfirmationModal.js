import React from 'react';
import { Box, Button, DialogContentText } from '@mui/material';
import GlobalModal from "./GlobalModal";

// Confirmation Modal Component
const ConfirmationModal = ({ isOpen, toggle, title, cancelTitle, message, confirmTitle, handleConfirm, handleCancel }) => {

  const Footer = () => (
    <Box display="flex" justifyContent="space-around" width="100%">
      <Button onClick={handleCancel} color="primary">{cancelTitle}</Button>
      <Button onClick={handleConfirm} color="error">{confirmTitle}</Button>
    </Box>
  );

  return (
    <GlobalModal
      isOpen={isOpen}
      toggle={toggle}
      title={title}
      footerContent={<Footer />}
      showCloseInHeader={false}
      showCloseInFooter={false}
    >
      <DialogContentText align='center' sx={(theme) => ({ color: theme.palette.text.primary })}>
        {message || "You should need to add a confirmation message. For Example: `Are you sure you want to Exit?`"}
      </DialogContentText>
    </GlobalModal>
  );
};

export default ConfirmationModal;

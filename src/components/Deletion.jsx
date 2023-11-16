import React, { useState } from 'react';
import { Modal, Button, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const DeleteConfirmationModal = ({ onDelete, onCancel }) => {
  const [open, setOpen] = useState(true);

  const handleDelete = () => {
    onDelete();
    handleClose();
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    onCancel();
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExited = () => {
    setOpen(true); // Reset the state after the modal has finished closing transition
  };

  return (
    <div>
      <Modal open={open} onClose={handleCancel} closeAfterTransition onExited={handleExited}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: '#3236a8',
            border: '2px solid blue',
            boxShadow: 24,
            p: 2,
          }}
        >
          <h1 style={{ color: 'yellow', margin: '5px'}} id="modal-modal-title">
            Are you sure you want to delete?
          </h1>
          <Button style={{ color: 'red' }} onClick={handleDelete} sx={{ mr: 2 }}>
            <DeleteIcon />
            Delete
          </Button>
          <Button style={{ color: 'white' }} onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteConfirmationModal;

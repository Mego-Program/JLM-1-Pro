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
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        width={'600px'}
        height={'200px'}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#222240',
            border: '2px solid #ffc300',
            borderRadius: '5%',
            boxShadow: 24,
            p: 2,
          }}
        >
          <h1 style={{ color: '#ffc300', margin: '20px',fontSize: '30px'}} id="modal-modal-title">
            Are you sure you want to delete?
          </h1>
          <div style={{display:'flex', flexDirection: 'row' }}>
          <Button style={{ color: 'red' ,fontSize: '24px'}} onClick={handleDelete} sx={{ mr: 2 }}>
            <DeleteIcon />
            Delete
          </Button>
          <Button style={{ color: 'white' ,fontSize: '24px'}} onClick={handleCancel}>
            Cancel
          </Button></div>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteConfirmationModal;

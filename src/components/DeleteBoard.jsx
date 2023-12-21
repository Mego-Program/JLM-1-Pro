import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';

const BoardComponentWithDelete = ({ boardId }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = async (projectId) => {
    try {
      // Make a POST request to your server to delete the board and tasks
      const response = await axios.delete('https://jlm-projects-server-1.vercel.app/projects/', { 
        projectId
      });
      
      // Handle the response as needed
      console.log(response.data);

      setOpenDialog(false);
    } catch (error) {
      console.error('Error deleting board:', error);
    }
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpenDialog}>
        Delete Board
      </Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete Board</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this board and all its tasks?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BoardComponentWithDelete
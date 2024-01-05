import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';
import { data } from 'autoprefixer';

const BoardDelete = ({ boardId }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleDelete = async () => {
    try {
      // Make a POST request to your server to delete the board and tasks
      const response = await axios.delete('http://localhost:8137/projects/', {data:{ 
        boardId}
      })}
       catch (error) {
      console.error('Error deleting project:', error);
    }
    setOpenDialog(false);
  };
  
  
  return (
    <div>
      <Button variant="outlined"  color="primary" onClick={handleOpenDialog}>
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

export default BoardDelete
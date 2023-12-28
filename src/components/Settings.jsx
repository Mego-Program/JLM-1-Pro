import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import ProjectDropdown from './ProjectDropdown';


// const BOARD_API_ENDPOINT = 'https://your-server-api-endpoint.com/board';
// const BOARD_USERS_API_ENDPOINT = 'https://your-server-api-endpoint.com/board-users';

const YourComponent = ({ selectedBoard, boards }) => {
  if (!selectedBoard) {
    return
  }
  console.log(selectedBoard.projectMembers);
  const [boardName, setBoardName] = useState(null);
  const [editBoardModalOpen, setEditBoardModalOpen] = useState(false);
  const [newBoardName, setNewBoardName] = useState();
  const [boardUsers, setBoardUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [updateUsersModalOpen, setUpdateUsersModalOpen] = useState(false);
  const [updateManagerModalOpen, setUpdateManagerModalOpen] = useState(false);
  const [selectedManager, setSelectedManager] = useState(null);


  const handleEditBoardClick = () => {
    setEditBoardModalOpen(true);
    setNewBoardName(selectedBoard.projectName)

  };

  const handleEditBoardModalClose = () => {
    setEditBoardModalOpen(false);
    // setNewBoardName(boardName)
    // Reset the newBoardName state on modal close

  };

  const handleUpdate = async () => {

    try {
      // Send updated data to the server
      await axios.post("http://localhost:8137/projects/update_board", {

        projectId: selectedBoard._id,
        projectName: newBoardName,
        // selectedUsers: selectedUsers.map(user => user.id),
        // selectedManager: selectedManager ? selectedManager.id : null,
      });

      // setBoardName(newBoardName)
      handleEditBoardModalClose();
      handleUpdateUsersModalClose();
      handleUpdateManagerModalClose();

    } catch (error) {
      console.error('Error updating data on the server', error);
    }

    // Close the modals after updating data

  };

  const handleUpdateUsersClick = () => {
    setUpdateUsersModalOpen(true);
  };

  const handleUpdateUsersModalClose = () => {
    setUpdateUsersModalOpen(false);
    // Reset the selectedUsers state on modal close
    setSelectedUsers([]);
  };

  const handleUpdateManagerClick = () => {
    setUpdateManagerModalOpen(true);
  };

  const handleUpdateManagerModalClose = () => {
    setUpdateManagerModalOpen(false);
    // Reset the selectedManager state on modal close
    setSelectedManager(null);
  };

  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prevSelectedUsers) => {
      const isSelected = prevSelectedUsers.some((user) => user.id === userId);

      if (isSelected) {
        return prevSelectedUsers.filter((user) => user.id !== userId);
      } else {
        // Add the user to the selected list
        const userToAdd = boardUsers.find((user) => user.id === userId);
        return [...prevSelectedUsers, userToAdd];
      }
    });
  };

  return (
    <div>
      {/* Edit Board Button */}
      <Button variant="contained" onClick={handleEditBoardClick}>
        Edit Board
      </Button>
      {/* <ProjectDropdown newBoardName={newBoardName}/> */}

      {/* Edit Board Modal */}
      <Modal open={editBoardModalOpen} onClose={handleEditBoardModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
          }}
        >
          <Typography variant="h6" component="div">
            Edit Board
          </Typography>
          {/* Edit Name Section */}
          <TextField
            label="New Board Name"
            variant="outlined"
            fullWidth
            value={newBoardName}
            onChange={(e) => setNewBoardName(e.target.value)}
          />

          {/* Display Board Users */}
          <Typography variant="h6" component="div">
            Board Users:
          </Typography>
          {selectedBoard.projectMembers.map((user, index) => (
            <Typography key={index} component="div">
              {user}
            </Typography>
          ))}

          {/* Update Users Button */}
          <Button variant="contained" onClick={handleUpdateUsersClick}>
            Update Users
          </Button>

          {/* Update Manager Button */}
          <Button variant="contained" onClick={handleUpdateManagerClick}>
            Update Manager
          </Button>

          {/* Update Button */}
          <Button variant="contained" onClick={handleUpdate}>
            Update
          </Button>

          <Button onClick={handleEditBoardModalClose}>Close</Button>
        </Box>
      </Modal>

      {/* Update Users Modal */}
      <Modal open={updateUsersModalOpen} onClose={handleUpdateUsersModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <Typography variant="h6" component="div">
            Update Users
          </Typography>
          {boardUsers && (
            <div>
              {boardUsers.map((user) => (
                <Box key={user.id} mt={2} p={2} border={1} borderRadius={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedUsers.some((selectedUser) => selectedUser.id === user.id)}
                        onChange={() => handleCheckboxChange(user.id)}
                      />
                    }
                    label={user.name}
                  />
                </Box>
              ))}
            </div>
          )}
          <Button onClick={handleUpdateUsersModalClose}>Close</Button>
        </Box>
      </Modal>

      {/* Update Manager Modal */}
      <Modal open={updateManagerModalOpen} onClose={handleUpdateManagerModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
          }}
        >
          <Typography variant="h6" component="div">
            Update Manager
          </Typography>
          {boardUsers && (
            <div>
              {boardUsers.map((user) => (
                <Box key={user.id} mt={2} p={2} border={1} borderRadius={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedManager && selectedManager.id === user.id}
                        onChange={() => setSelectedManager(user)}
                      />
                    }
                    label={user.name}
                  />
                </Box>
              ))}
            </div>
          )}
          <Button onClick={handleUpdateManagerModalClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default YourComponent;

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import  {getUser}  from './FunctionToServer.jsx';

import axios from 'axios';

const AddBoardForm = () => {
  const [open, setOpen] = useState(false);
  const [usersModalOpen, setUsersModalOpen] = useState(false);
  const [managerModalOpen, setManagerModalOpen] = useState(false);
  const [boardName, setBoardName] = useState('');
  const [users, setUsers] = useState([]);
  const [manager,setManager] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedManager, setSelectedManager] = useState(null);

  // console.log("selectedUsers:",selectedUsers);
 
  
useEffect(()=>{
  async function getUsers(){
  const user = await getUser();
  setUsers(user);}
  getUsers()
},[])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUsersModalOpen =  async() => {
    
    // console.log('users:',user);

    setUsersModalOpen(true);
    
  };

  const handleManagerModalOpen = async () => {
    const manager = await getUser();
    setManager(manager);
    setManagerModalOpen(true);
  };

  const handleUsersModalClose = () => {

    setUsersModalOpen(false);
  };

  const handleManagerModalClose = () => {
    setManagerModalOpen(false);
  };

  const handleBoardNameChange = (event) => {
    setBoardName(event.target.value);
  };

   const handleCheckboxChange = (user) => {
    // console.log(user);
    setSelectedUsers((prevSelectedUsers) => {

      if (prevSelectedUsers.includes(user)) {
        return prevSelectedUsers.filter((id) => id !== user);
      } else {
        return [...prevSelectedUsers, user];
      }
    });
    // console.log("users:",selectedUsers);
  };

  const handleManagerCheckboxChange = (manager) => {
    setSelectedManager((prevManager)=>{
      if (prevManager===manager){
        return null
      }else{
        return manager
      }
    });
console.log("man:",selectedManager);
  };

  const handleSave = async () => {
    try {
      // Simulate sending data to the database using Axios POST request
      await axios.post('http://localhost:8137/projects/add_project', {
        name: boardName,
        manager: selectedManager,
        users: selectedUsers,
      });
  
      console.log('Save successful:', { name: boardName, manager: selectedManager, users: selectedUsers });
  
      // After a successful save, close the main modal
      setOpen(false);
    } catch (error) {
      console.error('Error saving board:', error);
  
      // Add more detailed error logging if needed
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  };
  

  return (
    <>
      <Button variant="outlined"  color="primary" onClick={handleOpen}>
        Add Board
      </Button>
      <Modal open={open} onClose={handleClose}>
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
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Typography variant="h6" component="div">
            Edit Board
          </Typography>
          <TextField
            label="Edit Name"
            variant="outlined"
            fullWidth
            value={boardName}
            onChange={handleBoardNameChange}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleUsersModalOpen}
            sx={{ width: '100%', justifyContent: 'flex-start' }}
          >
            Select Users
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleManagerModalOpen}
            sx={{ width: '100%', justifyContent: 'flex-start' }}
          >
            Select Manager
          </Button>
          {/* Save button in the main modal */}
          <Button variant="outlined" color="primary" onClick={handleSave} sx={{ width: '100%', justifyContent: 'flex-start' }}>
            Save
          </Button>
          {/* Close button for the modal */}
          <Button variant="outlined" color="primary" onClick={handleClose} sx={{ width: '100%', justifyContent: 'flex-start' }}>
            Close
          </Button>
        </Box>
      </Modal>
      {/* Users Modal */}
      <Modal open={usersModalOpen} onClose={handleUsersModalClose}>
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
            color:'#000'
          }}
        >
          <Typography variant="h6" component="div">
            Select Users
          </Typography>
          {users.map((user) => (
            <Box key={user._id} mt={2} p={2} border={1} borderRadius={4}>
              <FormControlLabel
                control={
                  <Checkbox

                    checked={selectedUsers.includes(user)}
                    onChange={() => handleCheckboxChange(user)}
                  />
                }
                label={user.username}
              />
            </Box>
          ))}
          {/* Close button for the users modal */}
          <Button variant="outlined" color="primary" onClick={handleUsersModalClose}>
            Close
          </Button>
        </Box>
      </Modal>
      {/* Manager Modal */}
      <Modal open={managerModalOpen} onClose={handleManagerModalClose}>
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
            color:'#000'
          }}
        >
          <Typography variant="h6" component="div">
            Select Manager
          </Typography>
          {users.map((user) => (
            <Box key={user._id} mt={2} p={2} border={1} borderRadius={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedManager === user}
                    onChange={() => handleManagerCheckboxChange(user)}
                  />
                }
                label={user.username}
              />
            </Box>
          ))}
          {/* Close button for the manager modal */}
          <Button variant="outlined" color="primary" onClick={handleManagerModalClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddBoardForm;

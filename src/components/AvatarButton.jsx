import React, { useState, useEffect } from 'react';
import { IconButton, Menu, MenuItem, Avatar, Tooltip } from '@mui/material';

const AvatarButton = ({ onAvatarClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    // Fetch avatars from the server
    fetchAvatars();
  }, []);

  const fetchAvatars = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setAvatars(data);
    } catch (error) {
      console.error('Error fetching avatars', error);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    // onAvatarClick(); // Notify parent component that the avatar is clicked
    handleMenuClose();
  };

  return (
    
    <div onClick={handleContainerClick}> 
      <IconButton onClick={handleMenuOpen}>
        {selectedAvatar ? (
          <Tooltip title={`ID: ${selectedAvatar.id} - Name: ${selectedAvatar.name}`} arrow>
            <Avatar src={selectedAvatar.url} style={{ border: '2px solid white' }} />
          </Tooltip>
        ) : (
          // Default icon when no avatar is selected
          <Avatar style={{ border: '2px solid white' }}>U</Avatar>
        )}
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {avatars.map((avatar) => (
          <MenuItem key={avatar.id} onClick={() => handleAvatarSelect(avatar)}>
            <Tooltip title={`ID: ${avatar.id} - Name: ${avatar.name}`} arrow>
              <Avatar src={avatar.url} style={{ border: '2px solid white' }} />
            </Tooltip>
            {avatar.id}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default AvatarButton;

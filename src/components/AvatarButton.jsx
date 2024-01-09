import React, { useState, useEffect } from 'react';
import { IconButton, Menu, MenuItem, Avatar, Tooltip } from '@mui/material';

const AvatarButton = ({ onAvatarClick,selectedBoard }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatars, setAvatars] = useState(selectedBoard.projectMembers);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const handleContainerClick = (e) => {
    e.stopPropagation();
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
          <Tooltip title={`ID: ${selectedAvatar._id} - Name: ${selectedAvatar.username}`} arrow>
            <Avatar src={selectedAvatar.image} style={{ border: '2px solid white' }} />
          </Tooltip>
        ) : (
          // Default icon when no avatar is selected
          <Avatar style={{ border: '2px solid white' }}>U</Avatar>
        )}
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {avatars.map((avatar) => (
          <MenuItem key={avatar._id} onClick={() => handleAvatarSelect(avatar)}>
            <Tooltip title={`ID: ${avatar._id} - Name: ${avatar.username}`} arrow>
              <Avatar src={avatar.image} style={{ border: '2px solid white' }} />
            </Tooltip>
            {avatar.username}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default AvatarButton;

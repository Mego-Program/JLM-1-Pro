// components/WelcomeTextComponent.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const WelcomeTextComponent = () => {
  return (
    <Box sx={{ marginRight: '20px',display: 'inline-flex'}}>
      {/* Placeholder for the avatar image */}
      <img
        src="avatar.png"
        alt="User Avatar"
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
     <Box sx={{ marginLeft: '5px',display: 'block'}}>
         {/* Welcoming Text */}
      <Typography variant="h6" sx={{ color: 'white', marginBottom: '0' }}>
        Welcome to our website!
      </Typography>
      {/* Additional Short Text */}
      <Typography variant="body2" sx={{ color: 'white', fontStyle: 'italic', fontSize: '12px' }}>
        This is a short description.
      </Typography>
     </Box>
    </Box>
  );
};

export default WelcomeTextComponent;

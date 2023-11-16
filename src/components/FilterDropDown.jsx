// components/Filter.jsx
import React from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';

const Filter = ({ label, options, selectedOption, onChange }) => {
 
    return (
    <Box sx={{ width: '23%', marginRight: '20px', marginBottom: '10px' }}>

      <Typography variant="body1" sx={{marginTop: '10px', marginBottom: '15px', fontWeight: 'light', color: 'white' }}>
        {label}
      </Typography>

      <Select
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
        sx={{ width: '100%', padding: '5px', height: '42px', backgroundColor: '#0A0A1B', color: 'white' }}
      >
          <MenuItem value="" disabled>
          Select {label}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default Filter;

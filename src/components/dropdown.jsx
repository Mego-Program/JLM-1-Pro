import React from 'react';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const BarDropdown = () => {
  const bars = ['Bar 1', 'Bar 2', 'Bar 3', 'Bar 4'];

  const handleChange = (event) => {
    // Handle dropdown selection here
    console.log(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="bar-dropdown-label">Select a Bar</InputLabel>
      <Select
        labelId="bar-dropdown-label"
        id="bar-dropdown"
        value={''} // You can set the default selected value here
        onChange={handleChange}
        label="Select a Bar"
      >
        {bars.map((bar, index) => (
          <MenuItem key={index} value={bar}>
            {/* You can customize the appearance of each MenuItem */}
            <div style={{ width: '50px', height: '10px', backgroundColor: 'blue' }}></div>
            {bar}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BarDropdown;

import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';

const TripleFilterDropdown = () => {
  const [selectedFilters, setSelectedFilters] = useState(['', '', '', '']);

  const handleFilterChange = (event, index) => {
    const newSelectedFilters = [...selectedFilters];
    newSelectedFilters[index] = event.target.value;
    setSelectedFilters(newSelectedFilters);

    setTimeout(() => {
      const resetFilters = [...newSelectedFilters];
      resetFilters[index] = '';
      setSelectedFilters(resetFilters);
    }, 1000);
  };

  const labels = ['Choose Issue', 'Choose Category', 'Choose Milestone', 'Choose Asignee'];

  return (
    <div style={{ display: 'flex', gap: '10px', margin: '30px', backgroundColor: '#21213E' }}>
      {[0, 1, 2, 3].map((index) => (
        <div key={index}>
          <Typography variant="subtitle1" style={{ color: '#ffff' }}>
            {labels[index]}
          </Typography>
          <FormControl sx={{ width: '300px' }}>
            <Select
              value={selectedFilters[index]}
              onChange={(event) => handleFilterChange(event, index)}
              sx={{
                backgroundColor: '#121231',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                height: '30px',
                margin: '5px',
                color: '#ffff',
              }}
              IconComponent={() => (
                <IconButton disableRipple>
                  <ArrowDropDownIcon style={{ color: '#ffff' }} />
                </IconButton>
              )}
            >
              <MenuItem value={`filter${index + 1}`}>{`Filter ${index + 1}`}</MenuItem>
            </Select>
          </FormControl>
        </div>
      ))}
    </div>
  );
};

export default TripleFilterDropdown;

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Filter from './FilterDropDown';
import WelcomeTextComponent from './WelcomeTextComponent';
import { FilterSprint } from './SprintFilter';

const MainComponentMui = () => {

  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');

  const options1 = ['Option A', 'Option B', 'Option C'];
  const options2 = ['Option X', 'Option Y', 'Option Z'];
  const options3 = ['Choice 1', 'Choice 2', 'Choice 3'];
  const options4 = ['Category 1', 'Category 2', 'Category 3'];

  


  return (
    <Box
    sx={{
      margin: '20px',
      display: 'flex',
      flexDirection: 'column',
      color: '#ffffff',
      }}
    >
      <WelcomeTextComponent />
      <FilterSprint />
  
    <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
      <Filter label="Issue Type" options={options1} selectedOption={selectedOption1} onChange={setSelectedOption1} />
      <Filter label="Category" options={options2} selectedOption={selectedOption2} onChange={setSelectedOption2} />
      <Filter label="Milestone" options={options3} selectedOption={selectedOption3} onChange={setSelectedOption3} />
      <Filter label="Assignee" options={options4} selectedOption={selectedOption4} onChange={setSelectedOption4} />
      </Box>
    </Box>
  );
};


export default MainComponentMui;

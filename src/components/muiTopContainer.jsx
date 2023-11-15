import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Input,
  Select,
  MenuItem,
} from '@mui/material';

const MainComponentMui = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');

  const options1 = ['Option A', 'Option B', 'Option C'];
  const options2 = ['Option X', 'Option Y', 'Option Z'];
  const options3 = ['Choice 1', 'Choice 2', 'Choice 3'];
  const options4 = ['Category 1', 'Category 2', 'Category 3'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <Box
      sx={{
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        color: '#ffffff', // Put color here
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img
          src="avatar.png"
          alt="User Avatar"
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }}
        />
        <Box>
        <Typography variant="h6" sx={{ color: 'white', marginBottom: '0' }}>
          Welcome to our website!
        </Typography>
        {/* Additional Short Text */}
      <Typography variant="body2" sx={{ color: 'white', fontStyle: 'italic', fontSize: '12px' }}>
        This is a short description.
      </Typography>
      </Box>
      </Box>

      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleFilter}
        sx={{
          background: '#0A0A1B',
          color: 'white',
          border: '1px solid #0A0A1B',
          borderRadius: '5px',
          padding: '10px',
          width: '100%',
          marginBottom: '10px',
        }}
      />
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* Dropdown Filters */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
        {/* Filter 1 */}
        <Box sx={{ width: '23%', marginRight: '20px', marginBottom: '20px' }}>
        
          <Typography variant="body1" sx={{ marginBottom: '5px', fontWeight: 'bold', color: 'white' }}>
            Filter 1:
          </Typography>
          <Select
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.target.value)}
            sx={{ width: '100%', padding: '5px', ...selectStyles }}
          >
            {options1.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Filter 2 */}
        <Box sx={{ width: '23%', marginRight: '20px', marginBottom: '20px' }}>
          <Typography variant="body1" sx={{ marginBottom: '5px', fontWeight: 'bold', color: 'white' }}>
            Filter 2:
          </Typography>
          <Select
            value={selectedOption2}
            onChange={(e) => setSelectedOption2(e.target.value)}
            sx={{ width: '100%', padding: '5px', ...selectStyles }}
          >
            <MenuItem value="">Select an option</MenuItem>
            {options2.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Filter 3 */}
        <Box sx={{ width: '23%', marginRight: '20px', marginBottom: '20px' }}>
          <Typography variant="body1" sx={{ marginBottom: '5px', fontWeight: 'bold', color: 'white' }}>
            Filter 3:
          </Typography>
          <Select
            value={selectedOption3}
            onChange={(e) => setSelectedOption3(e.target.value)}
            sx={{ width: '100%', padding: '5px', ...selectStyles }}
          >
            <MenuItem value="">Select an option</MenuItem>
            {options3.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Filter 4 */}
        <Box sx={{ width: '23%', marginRight: '20px', marginBottom: '20px' }}>
          <Typography variant="body1" sx={{ marginBottom: '5px', fontWeight: 'bold', color: 'white' }}>
            Filter 4:
          </Typography>
          <Select
            value={selectedOption4}
            onChange={(e) => setSelectedOption4(e.target.value)}
            sx={{ width: '100%', padding: '5px', ...selectStyles }}
          >
            <MenuItem value="">Select an option</MenuItem>
            {options4.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

const selectStyles = {
  background: '#0A0A1B',
  color: 'white',
  border: '1px solid #0A0A1B',
  borderRadius: '5px',
  padding: '10px',
  width: '100%',
  marginBottom: '10px',
};

export default MainComponentMui;

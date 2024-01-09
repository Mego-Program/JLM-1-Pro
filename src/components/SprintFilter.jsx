import React, { useState, useEffect } from 'react';
import { Select } from '@mui/material';

export const FilterSprint = () => {
    
const [data, setData] = useState([]);
const [filteredData, setFilteredData] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const handleFilter = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
  };

    return (<>
<Select
type="text"
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
</>
)
}

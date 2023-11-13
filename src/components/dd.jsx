import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';

const SortableTabBar = ({ tabs, onChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
        {tabs.map((tab, index) => (
          <Tab label={tab} key={index} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default SortableTabBar;

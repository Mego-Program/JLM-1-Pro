import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Button } from '@mui/material';
import axios from 'axios';

export default function ShlomosSprintFilter({selectedBoard, dateRange, selectedTasks}) {
  const [selectedSprint, setSelectedSprint] = useState('');
  const [sprints, setSprints] = useState([]);
  const [sprintName, setSprintName] = useState('');
  const [newStartDate, setStartDate] = useState('');
  const [newEndDate, setNewEndDate] = useState('');
  const [newTaskArry, setNewTaskArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8137/projects/getAllSprints');
        const sprintData = response.data.map((project) => project.Sprint.map((sprint) => sprint)).flat();
        setSprints(sprintData);
        console.log('sprintdata:',sprintData);
        console.log('sprints:',response);

      } 
      catch (error) {
        console.error('Error fetching sprints:', error.message);
        console.log('sprints:',response);

      }};
    fetchData();
  }, []); 

  const handleChange = (event) => {
    setSelectedSprint(event.target.value);
  };

  const handleEdit = async(sprintName) => {
    const handleCreateSprint = async () => {
      // TODO: Implement logic to send data to the server
      const sprintData = {
        sprintName: sprintName,
        startDate: dateRange[0],
        endDate: dateRange[1],
        taskArray: selectedTasks,
      }
      
      try {
        const response = await axios.post("http://localhost:8137/projects/edit_sprint",
        sprintData)} 
      catch (error) {  
      };
      console.log("sprint data:", sprintData);
      // Close the modal after creating the sprint
      handleClose();
    };
    console.log(`Editing sprint with name: ${sprintName}`);
  };

  const handleDelete = async (sprintName, ) => {
    const response = await axios.post("http://localhost:8137/projects/delete_sprint",{
      sprintName:sprintName,
      projectID: selectedBoard._id,
    })
    console.log(`Deleting sprint with name: ${sprintName}`);
    console.log('sprintName',sprintName);
  };
  
  return (
    <div>
      <Select value={selectedSprint} onChange={handleChange}>
        <MenuItem value="" disabled>Select a sprint</MenuItem>
        {sprints.map((sprint) => (
          <div key={sprint.sprintName} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <MenuItem value={sprint.sprintName}>
              {sprint.sprintName}
            </MenuItem>
            <div>
              <Button onClick={() => handleEdit(sprint.sprintName)} variant="outlined" color="primary">
                Edit
              </Button>
              <Button onClick={() => handleDelete(sprint.sprintName)} variant="outlined" color="secondary">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </Select>
    </div>
  );
}


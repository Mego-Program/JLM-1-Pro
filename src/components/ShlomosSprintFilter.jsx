// import React, { useState, useEffect } from 'react';
// import { Select, MenuItem } from '@mui/material';
// import axios from 'axios';

// export default function ShlomosSprintFilter(sprintData) {
//   const [selectedSprint, setSelectedSprint] = useState('');
//   const [sprints, setSprints] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post('http://localhost:8137/projects/GetAllSprints');
//         const sprintData = response.data.map((project) => project.Sprint.map((sprint) => sprint.sprintName)).flat();
//         setSprints(sprintData);
//         console.log('response.data:', response.data);
//         console.log('sprintdata:',sprintData);
//       } catch (error) {
//         console.error('Error fetching sprints:', error.message);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures it runs only once on mount

//   const handleChange = (event) => {
//     setSelectedSprint(event.target.value);
//   };

//   return (
//     <Select value={selectedSprint} onChange={handleChange}>
//       <MenuItem value="" disabled>Select a sprint</MenuItem>
//       {sprints.map((sprintData) => (
//         <MenuItem key={sprintData} value={sprintData}>
//           {sprintData}
//           {console.log('iv opened')};
//         </MenuItem>
//       ))}
//     </Select>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Button } from '@mui/material';
import axios from 'axios';

export default function ShlomosSprintFilter() {
  const [selectedSprint, setSelectedSprint] = useState('');
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8137/projects/GetAllSprints');
        const sprintData = response.data.map((project) => project.Sprint.map((sprint) => sprint)).flat();
        setSprints(sprintData);
      } catch (error) {
        console.error('Error fetching sprints:', error.message);
      }
    };

    fetchData();
  }, []); 

  const handleChange = (event) => {
    setSelectedSprint(event.target.value);
  };

  const handleEdit = (sprintId) => {
    // Implement logic to handle edit operation for the specific sprint
    console.log(`Editing sprint with ID: ${sprintId}`);
  };

  const handleDelete = (sprintId) => {
    // Implement logic to handle delete operation for the specific sprint
    console.log(`Deleting sprint with ID: ${sprintId}`);
  };

  return (
    <div>
      <Select value={selectedSprint} onChange={handleChange}>
        <MenuItem value="" disabled>Select a sprint</MenuItem>
        {sprints.map((sprint) => (
          <div key={sprint._id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <MenuItem value={sprint.sprintName}>
              {sprint.sprintName}
            </MenuItem>
            <div>
              <Button onClick={() => handleEdit(sprint._id)} variant="outlined" color="primary">
                Edit
              </Button>
              <Button onClick={() => handleDelete(sprint._id)} variant="outlined" color="secondary">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </Select>
    </div>
  );
}

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
// import { Option as BaseOption, optionClasses } from '@mui/base/Option';
// import { Popper as BasePopper } from '@mui/base/Popper';
// import { styled } from '@mui/system';
// import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
// import axios from 'axios';



// const Select = React.forwardRef(function Select(props, ref) {
//   const slots = {
//     root: CustomButton,
//     listbox: Listbox,
//     popper: Popper,
//     ...props.slots,
//   };

//   return <BaseSelect {...props} ref={ref} slots={slots} />;
// });


// export async function getAllSprints(){
//     try {
//         const response = await axios.post('http://localhost:8137/projects/getAllSprints')
//         console.log(response.data)
//         return response.data
//       } catch (error) {
//         console.error('Error fetching tasks:', error.message);
//         return null
//       }
//       console.log(response.data);
// }

// const sprints = getAllSprints();

// // const selectSprint = async () => {
// //   // TODO: Implement logic to send data to the server
// //   try {
// //     const response = await axios.post("/add_sprint",sprintData)
// //   } 
// //   catch (error) {  
// //   };
// //   console.log("sprint data:", sprintData);
// //   // Close the modal after creating the sprint
// //   handleClose();
// // };



// export default function ShlomosSprintFilter() {
//   const [sprints, setSprints] = useState([]);
//   return (
//     <Select placeholder='Select a sprint'>
//      {sprints.sprintName}
//     </Select>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import {Select, menuItem} from '@mui/material';
// import axios from 'axios';

// export async function getAllSprints() {
//   try {
//     const response = await axios.post('http://localhost:8137/projects/GetAllSprints');
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching sprints:', error.message);
//     return null;
//   }
// }

// export default function ShlomosSprintFilter() {
//   const [sprints, setSprints] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedSprints = await getAllSprints();
//       if (fetchedSprints) {
//         setSprints(fetchedSprints);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Select placeholder='Select a sprint'>
//       {sprints.map((sprint) => (
//         <Select key={sprint._id} value={sprint}>
//           {sprint.Sprint}
//         </Select>
//       ))}
//     </Select>
//   );
// }



import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from '@mui/material';
import axios from 'axios';

export default function ShlomosSprintFilter(sprintData) {
  const [selectedSprint, setSelectedSprint] = useState('');
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8137/projects/GetAllSprints');
        const sprintData = response.data.map((project) => project.Sprint.map((sprint) => sprint.sprintName)).flat();
        // setSprints(sprintData);
        console.log('response.data:', response.data);
        console.log('sprintdata:',sprintData);
      } catch (error) {
        console.error('Error fetching sprints:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleChange = (event) => {
    setSelectedSprint(event.target.value);
  };

  return (
    <Select value={selectedSprint} onChange={handleChange}>
      <MenuItem value="" disabled>Select a sprint</MenuItem>
      {sprints.map((sprintData) => (
        <MenuItem key={sprintData} value={sprintData}>
          {sprintData}
          {console.log('iv opened')};
        </MenuItem>
      ))}
    </Select>
  );
}
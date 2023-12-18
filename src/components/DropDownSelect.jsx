import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropdownSelect = () => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [currentSprint, setCurrentSprint] = useState([]);

  useEffect(() => {
    const fetchCurrentSprint = async () => {
      try {
        const response = await fetch('http://localhost:8137/todos');
        const data = await response.json();
        setCurrentSprint(data.map((user) => user.username));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchCurrentSprint();
  }, []);

  const handleChange = (event) => {
    setSelectedTasks(event.target.value);
  };

  return (
    <FormControl>
      <Select multiple value={selectedTasks} onChange={handleChange} displayEmpty>
        <MenuItem disabled value="">
          Select tasks for Current Sprint
        </MenuItem>
        {currentSprint.map((username) => (
          <MenuItem key={username} value={username}>
            {username}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSelect;




// import React, { useState, useEffect } from 'react';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const DropdownSelect = () => {
//   const [selectedTasks, setSelectedTasks] = useState([]);
//   const [taskOptions, setTaskOptions] = useState([]);

//   useEffect(() => {
//     // Fetch tasks from the server
//     const fetchTasks = async () => {
//       try {
//         const response = await fetch('http://localhost:8137/todos');
//         const data = await response.json();
//         // Assuming your server response is an array of tasks
//         setTaskOptions(data.map((task) => task.taskName));
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchTasks();
//   }, []); // Run the effect only once when the component mounts

//   const handleChange = (event) => {
//     setSelectedTasks(event.target.value);
//   };

//   return (
//     <FormControl>
//       <Select multiple value={selectedTasks} onChange={handleChange} displayEmpty>
//         <MenuItem disabled value="" key="placeholder">
//           Select Tasks
//         </MenuItem>
//         {taskOptions.map((task) => (
//           <MenuItem key={task} value={task}>
//             {task}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default DropdownSelect;

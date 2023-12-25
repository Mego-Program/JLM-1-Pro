// import React, { useState, useEffect } from 'react';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const DropdownSelect = (tasks) => {
//   const [selectedTasks, setSelectedTasks] = useState(tasks.tasks.tasks);
//   const [currentSprint, setCurrentSprint] = useState([]);
//   const [sprints, setSprints] = useState([]);

//   const fetchCurrentSprint = () => {
//     const headers = selectedTasks.map((t) => t.header);
//     setCurrentSprint([...new Set(headers)]);
//     console.log('current p\sprint::',currentSprint);
//     console.log('tasks::',tasks);
//   };

//   useEffect(() => {
//     fetchCurrentSprint();
//   }, [tasks]);

//   const handleChange = (event) => {
//     const selectedHeaders = event.target.value.map((selectedTask) => {
//       if (typeof selectedTask === 'object') {
//         return selectedTask.header;
//       }
//       return selectedTask;
//     });
  
//     setSelectedTasks(event.target.value);
//     setCurrentSprint([...new Set(selectedHeaders)]);
//   };
  

//   return (
//     <FormControl>
//       <Select multiple value={selectedTasks} onChange={handleChange} displayEmpty>
//         <MenuItem disabled value="">
//           Select tasks for Current Sprint
//         </MenuItem>
//         {selectedTasks.map((t) => (
//           <MenuItem key={t.header} value={t.header}>
//             {t.header}
//           </MenuItem>
//         ))}
//       </Select>
//       {/* {console.log({ currentSprint })} */}
//     </FormControl>
//   );
// };

// export default DropdownSelect;

// import React, { useState, useEffect } from 'react';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const DropdownSelect = ({ tasks }) => {
//   const [selectedTasks, setSelectedTasks] = useState(tasks.tasks.tasks);
//   const [taskHeaders, setTaskHeaders] = useState([]);

//   useEffect(() => {
//     // Ensure that tasks is an array and not empty before extracting task headers
//     if (Array.isArray(tasks) && tasks.length > 0) {
//       const headers = tasks.map((task) => task.header);
//       setTaskHeaders([...new Set(headers)]);
//     }
//   }, [tasks]);

//   const handleChange = (event) => {
//     const selectedHeaders = event.target.value;
//     setSelectedTasks(selectedHeaders);
//   };

//   return (
//     <FormControl>
//       <Select multiple value={selectedTasks} onChange={handleChange} displayEmpty>
//         <MenuItem disabled value="">
//           Select tasks for Current Sprint
//         </MenuItem>
//         {taskHeaders.map((header) => (
//           <MenuItem key={header} value={header}>
//             {header}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default DropdownSelect;


import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropdownSelect = ({ tasks, selectedTasks, setSelectedTasks }) => {
  const handleChange = (event) => {
    setSelectedTasks(event.target.value);
  };

  return (
    <FormControl>
      <Select multiple value={selectedTasks} onChange={handleChange} displayEmpty>
        <MenuItem disabled value="">
          Select tasks for Current Sprint
        </MenuItem>
        {tasks.map((task) => (
          <MenuItem key={task.header} value={task}>
            {task.header}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSelect;
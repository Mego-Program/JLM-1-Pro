import React, { useState } from 'react';

const SprintFeature = () => {
  const [sprintDetails, setSprintDetails] = useState({
    tasks: [],
    deadline: null,
  });

  const createNewSprint = () => {
    const tasks = ['Task1', 'Task2', 'Task3'];
    setSprintDetails({
      tasks: tasks,
      deadline: new Date('2023-12-31'),
    });
    saveSprintHistory(sprintDetails);
  };

  const saveSprintHistory = (sprintDetails) => {
    console.log('Sprint history saved:', sprintDetails);
  };

  return (
    <div>
      <h2>Sprint Component</h2>
      <button onClick={createNewSprint}>Create New Sprint</button>
      
      <div>
        <h3>Sprint Details:</h3>
        <ul>
          <li>Deadline: {sprintDetails.deadline?.toLocaleDateString()}</li>
        </ul>
        
        {/* Dropdown for tasks */}
        <label htmlFor="tasks">Select Tasks:</label>
        <select id="tasks" multiple>
          {sprintDetails.tasks.map((task, index) => (
            <option key={index}>{task}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SprintFeature;
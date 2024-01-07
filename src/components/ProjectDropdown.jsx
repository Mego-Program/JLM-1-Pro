// ProjectDropdown.js
import React, { useState, useEffect } from "react";
import YourComponent from "./Settings";


const ProjectDropdown = ({ boards, onSetSelectedBoards, selectedBoard }) => {
  
  
  // const [projects, setProjects] = useState([]);
  
  const onChange = (value) => {
    console.log(value);
    onSetSelectedBoards(value);
  };

  return (
    <div className="w-full " >
      <select
        id="projectDropdown"
        className="w-full p-2 m-4 text-white rounded bg-blue-950 text-yellow-500 border border-yellow-500  hover:border-yellow-500 hover:text-yellow-500" 
        style={{ height: "60px" ,fontSize: "30px"}}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={boards[0]?._id}
      >
        {boards?.map((project) => (
          
          <option key={project._id} value={project._id}>
            {project.projectName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectDropdown;

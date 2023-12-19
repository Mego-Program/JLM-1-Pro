// ProjectDropdown.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectDropdown = ({ onSelectProject }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8137/projects/get_all_data")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="w-full ">
      <select
        id="projectDropdown"
        className="bg-blue-950 w-full m-4 text-white rounded p-2"
        onChange={(e) => onSelectProject(e.target.value)}
      >
        <option value="">Select a Project</option>
        {projects.map((project) => (
          <option key={project._id} value={project._id}>
            {project.projectName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectDropdown;

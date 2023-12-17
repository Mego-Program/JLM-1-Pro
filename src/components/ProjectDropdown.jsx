// ProjectDropdown.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectDropdown = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Make a request to your backend API to get all projects
    axios.post("http://localhost:8137/projects/get_all_data")
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="w-full max-w-screen mx-auto px-4">
      <select id="projectDropdown" className="w-full bg-black text-white rounded p-1 m-2">
        {projects.map(project => (
          <option key={project._id} value={project._id}>
            {project.projectName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectDropdown;

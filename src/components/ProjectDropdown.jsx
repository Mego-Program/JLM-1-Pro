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
    <div>
      <select
        id="projectDropdown"
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

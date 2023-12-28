const ProjectDropdown = ({ boards, onSetSelectedBoards }) => {

  const onChange = (value) => {
    console.log(value);
    onSetSelectedBoards(value);
  };

  return (
    <div className="w-full ">
      <select
        id="projectDropdown"
        className="w-full p-2 m-4 text-white rounded bg-blue-950"
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

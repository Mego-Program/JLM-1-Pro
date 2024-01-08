import axios from "axios";

const url = import.meta.env.DEV
  ? "http://localhost:8137"
  : "https://jlm-projects-server-1.vercel.app";

export const fetchAllBoards = async () => {
  console.log("import.meta.env.DEV", url);
  const boards = await axios.get(`${url}/projects/get_all_data`);
  const boardData = await boards.data;
  return boardData;
};

export const fetchSprints = async () => {
  try {
    const response = await axios.post(url + "/projects/GetAllSprints");
    const sprintData = response.data
      .map((project) => project.Sprint.map((sprint) => sprint.sprintName))
      .flat();
    // setSprints(sprintData);
    console.log("response.data:", response.data);
    console.log("sprintdata:", sprintData);
  } catch (error) {
    console.error("Error fetching sprints:", error.message);
  }
};


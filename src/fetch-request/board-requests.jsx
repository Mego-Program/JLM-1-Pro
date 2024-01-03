import axios from "axios";

const url = import.meta.env.DEV
  ? "http://localhost:8137/projects"
  : "https://jlm-projects-server-1.vercel.app";

export const fetchAllBoards = async () => {
  console.log("import.meta.env.DEV", import.meta.env.DEV);
  const boards = await axios.post(`${url}/projects/get_all_data`);
  const boardData = await boards.data;
  return boardData;
};

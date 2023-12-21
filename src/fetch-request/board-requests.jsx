import axios from "axios";

export const fetchAllBoards = async () => {
  const boards = await axios.post(
    "http://localhost:8137/projects/get_all_data"
  );
  const boardData = await boards.data;
  return boardData;
};

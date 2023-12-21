import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import SpecButton from "./components/ButtonSpecs";

import AllUsers from "remotAllUsers/AllUsers"
export const RouterPro = (
  <>
    <SpecButton />
    <KanbanBoard />
  </>
);

export default function AppProjects() {
  const fetchUsers = async () => {
    try {
      const users = await AllUsers();
      console.log('users:',users);
    } catch (error) {
      console.error(error);
    }
  };
  fetchUsers();
  return RouterPro;
}

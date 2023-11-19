import React from "react";
import "./App.css";
import KanbanBoard from './components/KanbanBoard';
import MainComponentMui from "./components/muiTopContainer";

export default function App() {
  return (
  <>
  <MainComponentMui/>
  <KanbanBoard />
  </>
  );
}



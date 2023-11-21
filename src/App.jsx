import React from "react";
import "./App.css";
import KanbanBoard from './components/KanbanBoard';
import MainComponentMui from "./components/MuiTopContainer";
import SprintFeature from "./components/SprintFeature";

export default function App() {
  return (
  <>
  <MainComponentMui/>
  <KanbanBoard />
  </>
  );
}



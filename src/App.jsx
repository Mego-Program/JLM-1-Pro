import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import MainComponentMui from "./components/MuiTopContainer";
import SprintFeature from "./components/SprintFeature";

export const RouterPro = (
  <>
    <MainComponentMui />
    <KanbanBoard />
  </>
);

export default function App() {
  return RouterPro;
}
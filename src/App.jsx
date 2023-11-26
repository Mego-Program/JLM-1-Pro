import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import MainComponentMui from "./components/MuiTopContainer";

export const RouterPro = (
  <>
    <MainComponentMui />
    <KanbanBoard />
  </>
);

export default function App() {
  return RouterPro;
}
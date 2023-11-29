import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import MainComponentMui from "./components/MuiTopContainer";
import SpecButton from "./components/ButtonSpecs";

export const RouterPro = (
  <>
    <MainComponentMui />
    <SpecButton />
    <KanbanBoard />
  </>
);

export default function App() {
  return RouterPro;
}
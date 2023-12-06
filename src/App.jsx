import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";

import SpecButton from "./components/ButtonSpecs";
import YourComponent from "./components/Settings";

export const RouterPro = (
  <>
    <SpecButton />
    <KanbanBoard />
    <YourComponent/>
  </>
);

export default function App() {
  return RouterPro;
}
import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import SpecButton from "./components/ButtonSpecs";


export const RouterPro = (
  <>
    <SpecButton />
    <KanbanBoard />
  </>
);

export default function App() {
  return RouterPro;
}
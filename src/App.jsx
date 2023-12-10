import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import SprintFeatrue from "./components/SprintFeature";
import SpecButton from "./components/ButtonSpecs";

export const RouterPro = (
  <>
    <SprintFeatrue />
    <SpecButton />
    <KanbanBoard />
  </>
);

export default function App() {
  return RouterPro;
}
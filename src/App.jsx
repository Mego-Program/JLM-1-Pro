import "./App.css";
import KanbanBoard from './components/KanbanBoard'
import MainComponentMui from "./components/muiTopContainer";

export default function App() {
  return (
  <>
  <MainComponentMui />
  <MainComponent />
  <KanbanBoard />
  </>
  );
}

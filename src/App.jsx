import "./App.css";
import MainComponent from "./components/dropDown";
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

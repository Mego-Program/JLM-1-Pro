import PlusIcon from "../icons/PlusIcon";
import { useMemo, useState, useEffect } from "react";
import ColumnContainer from "./ColumnContainer";
import axios from "axios";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";
import ProjectDropdown from './ProjectDropdown';  
import { update_tasks_status } from "./FunctionToServer";


async function getTasksByProjectId(projectId){
  try {
    const response = await axios.post('http://localhost:8137/tasks/get_tasks_by_projectId',{
      projectId: projectId
    });
    return response.data
  } catch (error) {
    console.error('Error fetching tasks:', error.message);
    return null
  }
};

const defaultCols = [];

const defaultTasks = [];

function KanbanBoard() {
  const [columns, setColumns] = useState(defaultCols);
  const [tasks, setTasks] = useState(defaultTasks);

  const [selectedProject, setSelectedProject] = useState('');
  const [editById, setEditById] = useState(null);
 
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns])
  const [activeColumn, setActiveColumn] = useState(null);
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
  //   // Fetch tasks and columns based on the selected project
  fetchData()
  //   // Example API call:
  //   // fetchProjectData(selectedProject).then((data) => {
  //   //   setColumns(data.columns);
  //   //   setTasks(data.tasks);
  //   // });
  }, [selectedProject]);

  const fetchData = async () => {
    try {
    
      const project = selectedProject_id;
      const task = await getTasksByProjectId(project)
      
      setTasks(task)
      setColumns(project.columns);
      setselectedProject(project)

    } catch (error) {
      console.error('Error fetching project:', error.message);
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  return (
    <div className="mt-0 flex flex-col items-center w-full h-full overflow-x-auto overflow-y-hidden">
    {/* ProjectDropdown component */}
    <ProjectDropdown
      onSelectProject={setSelectedProject}
      selectedProject={selectedProject}
    />

      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  currentProject = {selectedProject} 
                  editById={editById}
                  setEditById={setEditById}
                  key={col.id}
                  column={col}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                />
              ))}
            </SortableContext>
          </div>

          <button
            onClick={() => {
              createNewColumn(selectedProject._id);
            }}
            className="
      h-[60px]
      w-[350px]
      min-w-[350px]
      cursor-pointer
      rounded-lg
      bg-yellow-500
      border-2
      border-yellow-200
      p-4
      ring-yellow-500
      hover:ring-4
      flex
      gap-2
      "
          >
            <PlusIcon />
            Add Column
          </button>
        </div>
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.id
                )}
              />
            )}
            {activeTask && (
              <TaskCard
                task={activeTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );

  async function createTask(columnId, taskDetails) {
   
    try{
      const response = await axios.post('http://localhost:8137/tasks/add_tasks',{
        // id: generateId(),
        projectID:selectedProject._id,
        columnId,
        header: taskDetails.header,
        content: taskDetails.content,
        issue: taskDetails.issue,
        asignee: taskDetails.asignee,
        date: taskDetails.date
    })
    
      setTasks([response.data, ...tasks]);
     console.log(tasks);
      // setEditById(response.data.task_id);
      // setEditById(newTask.id);
    }catch(error){
      console.log(error);
    };}
  

  async function deleteTask(taskeId) {
    try{
    const response = await axios.post('http://localhost:8137/tasks/delete_tasks',{      
      taskeId:taskeId
      });
      fetchData()

      //  const newTasks = tasks.filter((task) => task.id !== taskeId);
      // setTasks(newTasks);
    }catch{
      console.error('Error fetching tasks:', error.message);
        return null
    }
  }

  async function updateTask(taskId, taskDetails) {
    try{
      const response = await axios.post('http://localhost:8137/tasks/update_task_content',{
        taskId:taskId,
        header: taskDetails.header,
        content: taskDetails.content,
        issue: taskDetails.issue,
        asignee: taskDetails.asignee,
        date: taskDetails.date
    })
      console.log("fun");
      setTasks((tasks) => {
        return tasks.map((task) => {
          if (task._id === taskId) {
            // Update the task with the new details
            return {
              ...task,
              header: taskDetails.header !== undefined ? taskDetails.header : task.header,
              content: taskDetails.content !== undefined ? taskDetails.content : task.content,
              asignee: taskDetails.asignee !== undefined ? taskDetails.asignee : task.asignee,
              issue: taskDetails.issue !== undefined ? taskDetails.issue : task.issue,
              date: taskDetails.date !== undefined ? taskDetails.date : task.date,
              // Add other properties as needed
            };
          }
          return task;
        });

      });
  }catch(error){
    console.error(error);
  }
  }

  

  
  async function createNewColumn(projectID) {
    try {
      const response = await axios.post('http://localhost:8137/projects/add_new_column',{
        projectId: projectID,
        columnID: `${generateId()}`,
        nameColumn:"newColumn"
      });
      
      setColumns(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
      return null
    }
  }

  async function deleteColumn(columnId) {
    try {
      const response = await axios.post('http://localhost:8137/projects/delete_column',{
            projectId:selectedProject._id,
            columnId:columnId
      })
      
      setColumns(response.data);
    
      const filteredColumns = columns.filter((col) => col.id !== columnId);
      setColumns(filteredColumns);
      
      const newTasks = tasks.filter((t) => t.columnId !== columnId);
      setTasks(newTasks);

    }catch (error) {
      console.error('Error fetching tasks:', error.message);
        return null
    }
}

  

  function updateColumn(id, column) {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;      
      return { ...col, column };
    });
    setColumns(newColumns);
  }

  function onDragStart(event) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragEnd(event) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === "Column";
    if (!isActiveAColumn) return;

    console.log("DRAG END");

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {

        const activeIndex = tasks.findIndex((t) => t._id === activeId);
        const overIndex = tasks.findIndex((t) => t._id === overId)
        
      update_tasks_status(activeId,tasks[overIndex].columnId)
      setTasks((tasks) => {

        if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
          // Fix introduced after video recording
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      const activeIndex = tasks.findIndex((t) =>  t._id === activeId)
      tasks[activeIndex].columnId = overId;
      update_tasks_status(activeId,overId)
      setTasks((tasks) => {
        ;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }
}

function generateId() {
  /* Generate a random number between 0 and 10000 */
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;

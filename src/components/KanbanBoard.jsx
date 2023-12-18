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
import { data } from "browserslist";
import { update_tasks_status } from "./FunctionToServer";



  
async function getProjectById(projectid){
  // try {
  //   const response = await axios.post('http://localhost:8137/projects/get_all_data')
  //   console.log(response.data);
  //   // setTasks(response.data)
  //   return response.data
    
  // } catch (error) {
  //   console.error('Error fetching tasks:', error.message);
  //   return null
  // }
  try {
    const response = await axios.post('http://localhost:8137/projects/get_project_by_id',{
      projectId: projectid
    });
    
    return response.data
    
  } catch (error) {
    console.error('Error fetching tasks:', error.message);
    return null
  }
};

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

const defaultCols = [
  {
    id: "todo",
    title: "",
  },
  {
    id: "doing",
    title: "",
  },
  {
    id: "done",
    title: "",
  },
];

const defaultTasks = [
  // {
  //   id: "1",
  //   columnId: "todo",
  //   content: "List admin APIs for dashboard",
  // },
  // {
  //   id: "2",
  //   columnId: "todo",
  //   content:
  //     "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
  // },
  // {
  //   id: "3",
  //   columnId: "doing",
  //   content: "Conduct security testing",
  // },
  // {
  //   id: "4",
  //   columnId: "doing",
  //   content: "Analyze competitors",
  // },
  // {
  //   id: "5",
  //   columnId: "done",
  //   content: "Create UI kit documentation",
  // },
  // {
  //   id: "6",
  //   columnId: "done",
  //   content: "Dev meeting",
  // },
  // {
  //   id: "7",
  //   columnId: "done",
  //   content: "Deliver dashboard prototype",
  // },
  // {
  //   id: "8",
  //   columnId: "todo",
  //   content: "Optimize application performance",
  // },
  // {
  //   id: "9",
  //   columnId: "todo",
  //   content: "Implement data validation",
  // },
  // {
  //   id: "10",
  //   columnId: "todo",
  //   content: "Design database schema",
  // },
  // {
  //   id: "11",
  //   columnId: "todo",
  //   content: "Integrate SSL web certificates into workflow",
  // },
  // {
  //   id: "12",
  //   columnId: "doing",
  //   content: "Implement error logging and monitoring",
  // },
  // {
  //   id: "13",
  //   columnId: "doing",
  //   content: "Design and implement responsive UI",
  // },
];

function KanbanBoard() {
  const [editById, setEditById] = useState(null);
  const [columns, setColumns] = useState(defaultCols);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  
  const [tasks, setTasks] = useState(defaultTasks);
  const [activeColumn, setActiveColumn] = useState(null);
  const [activeTask, setActiveTask] = useState(null);
  const [ccurrentProject,setCcurrentProject] = useState(null)

  const fetchData = async () => {
    try {
    
      const project = await getProjectById("65672ab778c514a0489d386f");
      const task = await getTasksByProjectId("65672ab778c514a0489d386f")
      
      setTasks(task)
      setColumns(project.columns);
      setCcurrentProject(project)
      
      

    } catch (error) {
      console.error('Error fetching project:', error.message);
    }
  };


  useEffect(() => {
    
    fetchData();
  }, []);
  console.log(tasks);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  return (
    <div
      className="
        mt-0
        flex
        w-full
        h-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]
    "
    >
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
                  ccurrentProject = {ccurrentProject} 
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
              createNewColumn(ccurrentProject._id);
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
        projectID:ccurrentProject._id,
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
            projectId:ccurrentProject._id,
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

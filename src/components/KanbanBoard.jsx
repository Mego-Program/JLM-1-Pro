import { useMemo, useState, useEffect } from "react";
import ColumnContainer from "./ColumnContainer";
import axios from "axios";
import {
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";
import { update_tasks_status } from "./FunctionToServer";
import ProjectDropdown from "./ProjectDropdown";
import {
  fetchAllBoards,
  getTasksByProjectId,
} from "../fetch-request/board-requests";
import EditBoard from "./Settings";
import BoardDelete from "./DeleteBoard";
import AddBoardForm from "./AddBoard";
import SprintFeature from "./SprintFeature";
import Grid from "@mui/material/Grid";

const defaultCols = [];

const defaultTasks = [];

function KanbanBoard() {
  const [columns, setColumns] = useState(defaultCols);
  const [tasks, setTasks] = useState(defaultTasks);

  const [editById, setEditById] = useState(null);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const [activeColumn, setActiveColumn] = useState(null);
  const [activeTask, setActiveTask] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  console.log(selectedBoard);

  const [boards, setBoards] = useState([]);

  const onFetchAllBoards = async () => {
    const newBoards = await fetchAllBoards();
    setBoards(newBoards);
    setSelectedBoard(newBoards[0]);

    const tasks = await getTasksByProjectId(newBoards[0]?._id);
    const columns = newBoards[0]?.columnIDs;
    setColumns([
      {
        id: columns[0],
        title: "Open",
      },
      {
        id: columns[1],
        title: "Open",
      },
      {
        id: columns[2],
        title: "Open",
      },
      {
        id: columns[3],
        title: "Open",
      },
    ]);
    setTasks(tasks);
  };

  const onSetSelectedBoards = async (boardId) => {
    const selectedBoard = boards.find((board) => board._id === boardId);
    setSelectedBoard(selectedBoard);
    console.log(boardId);

    const tasks = await getTasksByProjectId(selectedBoard?._id);
    setTasks(tasks);
  };

  useEffect(() => {
    onFetchAllBoards();
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={0}
      sx={{ width: "100%", minHeight: "100vh" }}
    >
      <ProjectDropdown
        boards={boards}
        onSetSelectedBoards={onSetSelectedBoards}
        selectedBoard={selectedBoard}
      />
        <AddBoardForm />

        <BoardDelete boardId={selectedBoard} />

        <EditBoard selectedBoard={selectedBoard} boards={boards} />

        <SprintFeature tasks={tasks} />

        <SortableContext items={columnsId}>
          {columns.map((col) => (
            <ColumnContainer
              ccurrentProject={selectedBoard}
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
        </Grid>
        );


  async function createTask(columnId, taskDetails) {
    console.log("tasksDetails::", taskDetails);
    console.log("columnId::", columnId);
    console.log("selectedBoard::", selectedBoard);
    try {
      const response = await axios.post(url + "/tasks/add_tasks", {
        projectID: selectedBoard,
        columnId,
        header: taskDetails.header,
        content: taskDetails.content,
        issue: taskDetails.issue,
        asignee: taskDetails.asignee,
        date: taskDetails.date,
      });

      setTasks([response.data, ...tasks]);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTask(taskeId) {
    try {
      const response = await axios.post(url + "/tasks/delete_tasks", {
        taskeId: taskeId,
      });
      // TODO: fetch only tasks of current board
      // fetchProjects();

      //  const newTasks = tasks.filter((task) => task.id !== taskeId);
      // setTasks(newTasks);
    } catch {
      console.error("Error fetching tasks:", error.message);
      return null;
    }
  }

  async function updateTask(taskId, taskDetails) {
    try {
      const response = await axios.post(url + "/tasks/update_task_content", {
        taskId: taskId,
        header: taskDetails.header,
        content: taskDetails.content,
        issue: taskDetails.issue,
        asignee: taskDetails.asignee,
        date: taskDetails.date,
      });
      console.log("fun");
      setTasks((tasks) => {
        return tasks.map((task) => {
          if (task._id === taskId) {
            // Update the task with the new details
            return {
              ...task,
              header:
                taskDetails.header !== undefined
                  ? taskDetails.header
                  : task.header,
              content:
                taskDetails.content !== undefined
                  ? taskDetails.content
                  : task.content,
              asignee:
                taskDetails.asignee !== undefined
                  ? taskDetails.asignee
                  : task.asignee,
              issue:
                taskDetails.issue !== undefined
                  ? taskDetails.issue
                  : task.issue,
              date:
                taskDetails.date !== undefined ? taskDetails.date : task.date,
            };
          }
          return task;
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteColumn(columnId) {
    try {
      const response = await axios.post(url + "/projects/delete_column", {
        projectId: selectedBoard._id,
        columnId: columnId,
      });

      setColumns(response.data);

      const filteredColumns = columns.filter((col) => col.id !== columnId);
      setColumns(filteredColumns);

      const newTasks = tasks.filter((t) => t.columnId !== columnId);
      setTasks(newTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
      return null;
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
      const overIndex = tasks.findIndex((t) => t._id === overId);

      update_tasks_status(activeId, tasks[overIndex].columnId);
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
      const activeIndex = tasks.findIndex((t) => t._id === activeId);
      tasks[activeIndex].columnId = overId;
      update_tasks_status(activeId, overId);
      setTasks((tasks) => {
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }
}

export default KanbanBoard;

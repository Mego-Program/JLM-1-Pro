// ColumnContainer.jsx
import React, { useMemo, useState } from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TrashIcon from "../icons/TrashIcon";
import TaskCard from "./TaskCard";
import Delete from "./Deletion";
import BarDropdown from "./Dropdown";
import BasicModal from "./TaskModule";

function ColumnContainer({
  ccurrentProject,
  column,
  editById,
  setEditById,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}) {
  const [editMode, setEditMode] = useState(false);
  const [del, setDel] = useState(false);
  const [modal, setModal] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-[url('https://cdn.naturettl.com/wp-content/uploads/2022/02/08203221/water-landscape-photos-11-534x800.jpg')] opacity-40 border-2 border-yellow-500 w-[50px] h-[500px] max-h-[500px] rounded-md flex flex-col"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-blue-950 w-[350px] text-white h-[500px] max-h-[500px] rounded-md flex flex-col"
    >
      {del ? (
        <Delete
          onDelete={() => deleteColumn(column.id)}
          onCancel={() => setDel(false)}
        />
      ) : undefined}
      <div
        {...attributes}
        {...listeners}
        className="bg-bg-[#21213E] text-white h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-blue-500 border-40 flex items-center justify-between"
      >
        <div className="flex gap-2" onClick={() => setEditMode(true)}>
          <div className="flex text-blue-900 justify-center items-center bg-yellow-500 px-3 py-2 text-sm rounded-full">
            {tasks.length}
          </div>
          <BarDropdown
            ccurrentProject = {ccurrentProject}
            column={column}
          />
          {!editMode && column.column}
          {editMode && (
            <input
              className="bg-blue-200 text-blue-900 focus:border-yellow-600 border rounded outline-none px-2"
              value={column.column.slice(0, 30)} // Display only the first 10 characters
              onChange={(e) => {
                const newValue = e.target.value.slice(0, 30); // Limit to 10 characters
                updateColumn(column.id, newValue);
              }}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        {modal && (
          <BasicModal
            onClose={() => setModal(false)}
            onSave={(taskDetails) => {
              createTask(column.id, taskDetails);
              setModal(false);
            }}
          />
        )}

        <button
          onClick={() => {
            setDel(true);
          }}
          className="stroke-gray-100 border border-yellow-700 hover:stroke-black hover:bg-yellow-500 rounded px-1 py-2"
        >
          <TrashIcon />
        </button>
      </div>

      <div className="flex flex-grow flex-col gap-4 p-0 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              editById={editById}
              setEditById={setEditById}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
      <button
        className="gap-10 items-center text-white border-yellow-500 border-2 rounded-md p-4 border-x-yellow-500 hover:bg-[url('https://media2.giphy.com/media/ctGFLebG1AqK4/giphy.gif')] hover:text-yellow-500 active:bg-black"
        onClick={() => setModal(true)}
      >
        Add task ➕
      </button>
    </div>
  );
}

export default ColumnContainer;

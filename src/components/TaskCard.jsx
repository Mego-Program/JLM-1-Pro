import { useEffect, useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import AvatarButton from "./AvatarButton";
import NewDateTime from "./NewDateTime";
import Delete from "./Deletion";
import BasicModal from "./TaskModule";

function TaskCard({ task, deleteTask, updateTask, editById, setEditById }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [del, setDel] = useState(false);
  const [modal, setModal] = useState(false);
  

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  useEffect(() => {
    if (editById === task.id) {
      setEditMode(true);
      setEditById(null);
    }
  }, [editById, setEditById, task.id]);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => !editMode && setModal(true) }
      className={`${
        editMode
          ? "bg-purple-900"
          : "bg-mainBackgroundColor hover:ring-2 hover:ring-inset hover:ring-yellow-500"
      } p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl cursor-grab relative task`}
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      {del && (
        <Delete
          onDelete={() => deleteTask(task.id)}
          onCancel={() => setDel(false)}
        />
      )}
      <>
      
        <AvatarButton />
        <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
          {task.header}
          {task.content}
          {task.date}
          
        </p>

        {mouseIsOver && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDel(true);
            }}
            className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100"
          >
            <TrashIcon />
          </button>
        )}
      </>
      <footer>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <NewDateTime />
        </div>
      </footer>

      {modal && (
  <BasicModal
    onClose={() => setModal(false)}
    onSave={(taskDetails) => {
      updateTask(task.id, taskDetails);
      setModal(false);
    }}
  />
)}

      


      
    </div>
  );
}

export default TaskCard;

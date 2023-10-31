import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const ItemType = 'ITEM';

const Item = ({ item, index, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={{ padding: '8px', margin: '4px', border: '1px solid #ccc' }}>
      {item}
    </div>
  );
};

export default function DragAndDrop() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', backgroundColor: 'green'}}>
        <div style={{ flex: 1 }}>
          <h2>Drag from here</h2>
          {items.map((item, index) => (
            <Item key={item} item={item} index={index} moveItem={moveItem} />
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <h2>Drop here</h2>
          {items.map((item, index) => (
            <Item key={item} item={item} index={index} moveItem={moveItem} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

import React from "react";

function App() {
  const handleDragStart = (e, content) => {
    e.dataTransfer.setData("text/plain", content);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, droppedContent) => {
    const draggedContent = e.dataTransfer.getData("text/plain");
    console.log("Dragged Content:", draggedContent);
    console.log("Dropped Content:", droppedContent);
    // Perform any actions you want with draggedContent and droppedContent
  };

  return (
    <div className="container mt-4">
      <h2>Drag and Drop Images</h2>
      <ul className="list-group">
        <li
          className="list-group-item"
          draggable
          onDragStart={(e) => handleDragStart(e, "Item 1")}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, "Item 1")}
        >
          Front House View
        </li>
        <li
          className="list-group-item"
          draggable
          onDragStart={(e) => handleDragStart(e, "Item 2")}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, "Item 2")}
        >
          Back House/Backyard View
        </li>
        <li
          className="list-group-item"
          draggable
          onDragStart={(e) => handleDragStart(e, "Item 3")}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, "Item 3")}
        >
          Living room
        </li>
        <li
          className="list-group-item"
          draggable
          onDragStart={(e) => handleDragStart(e, "Item 4")}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, "Item 4")}
        >
          Kitchen
        </li>
      </ul>
    </div>
  );
}

export default App;

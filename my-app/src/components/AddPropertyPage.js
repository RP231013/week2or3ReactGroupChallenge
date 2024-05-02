import React, { useState } from "react";

function App() {
  const [droppedImages, setDroppedImages] = useState({});

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, buttonId) => {
    e.preventDefault();
    const imageURL = e.dataTransfer.getData("text/plain");
    setDroppedImages({
      ...droppedImages,
      [buttonId]: imageURL,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Drag and Drop Images </h2>
      <div className="mt-4">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Location"
            />
            <button
              className="btn btn-primary"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, "button1")}
            >
              {droppedImages["button1"] ? (
                <img src={droppedImages["button1"]} alt="Dropped Image" />
              ) : (
                "Drop Here"
              )}
            </button>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="House Number"
            />
            <button
              className="btn btn-secondary"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, "button2")}
            ></button>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Price"
            />
            <button
              className="btn btn-success"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, "button3")}
            ></button>
          </div>
        </div>
      </div>
      <div className="mt-4"></div>
    </div>
  );
}

export default App;

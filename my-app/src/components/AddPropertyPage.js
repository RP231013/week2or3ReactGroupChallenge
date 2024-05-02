import React, { useState } from 'react';

function App() {
  const [droppedImages, setDroppedImages] = useState({
    button1: null,
    button2: null,
    button3: null
  });

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, buttonId) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setDroppedImages({
        ...droppedImages,
        [buttonId]: imageURL,
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Drag and Drop Images</h2>
      <div className="mt-4">
        <div className="row">
          <div className="col-md-4">
            <input type="text" className="form-control mb-2" placeholder="Location" />
            <div
              className="drop-box border p-3"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, 'button1')}>
              {droppedImages['button1'] ? <img src={droppedImages['button1']} alt="Dropped Image" className="img-fluid" /> : 'Drop Here'}
            </div>
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control mb-2" placeholder="House Number" />
            <div
              className="drop-box border p-3"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, 'button2')}>
              {droppedImages['button2'] ? <img src={droppedImages['button2']} alt="Dropped Image" className="img-fluid" /> : 'Drop Here'}
            </div>
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control mb-2" placeholder="Price" />
            <div
              className="drop-box border p-3"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, 'button3')}>
              {droppedImages['button3'] ? <img src={droppedImages['button3']} alt="Dropped Image" className="img-fluid" /> : 'Drop Here'}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4"></div>
    </div>
  );
}

export default App;


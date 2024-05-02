import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import AddPropertyPage from "./components/AddPropertyPage";
import PropertyDetailsPage from "./components/PropertyDetailsPage";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/add-property" element={<AddPropertyPage />} />
          <Route path="/" element={<Homepage />} />
          <Route
            path="/property-details"
            element={<PropertyDetailsPage />}
          />{" "}
          {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// src/App.js
import React, { useState } from "react";

import HorizontalMenu from "./components/HorizontalMenu";
import StudentGrid from "./components/Grids/StudentGrid";
import StudentTile from "./components/Tile/StudentTile";
import "./App.css";

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleTileClick = (student) => {
    setSelectedStudent(student);
  };

  const handleBack = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="App">
      {/* <HamburgerMenu type="variation1" /> */}

      <HorizontalMenu />
      {selectedStudent ? (
        <StudentTile student={selectedStudent} onBack={handleBack} />
      ) : (
        <StudentGrid onTileClick={handleTileClick} />
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./BlackBox.css"; 
import "./PlayerList.css";

const BlackBox = ({responseData}) => {
  const [showBlackBox, setShowBlackBox] = useState(false);

  const toggleBlackBox = () => {
    setShowBlackBox(!showBlackBox);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
      setShowBlackBox(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <div>
      <button className="show" onClick={toggleBlackBox}>MY DREAM11</button>
      {showBlackBox && (
        <div className="black-box-overlay">
          {/* Your content inside the black box */}
          <div className="black-box-content">
            <h2>YOUR DREAM TEAM:</h2>
            <ul>
              {responseData.map((playerA, index) => (
                <li key={index}>{playerA}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlackBox;

import React from "react";
import "./style.css";

const StudentTile = ({ student, onBack }) => {
  return (
    <div class="frame">
      <div class="center">
        <div class="profile">
          <div class="image">
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <img
              src={student.picture.large}
              width="70"
              height="70"
              alt="Jessica Potter"
            />
          </div>

          <div class="name">{student.name?.first}</div>
          <div class="job">{student.email}</div>

          <div class="actions">
            <button class="btn" onClick={onBack}>
              Back
            </button>
          </div>
        </div>

        <div class="stats">
          <div class="box">
            <span class="value">{student.registered.age}</span>
            <span class="parameter">Age</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTile;

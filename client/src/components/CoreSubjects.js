import React from "react";
import "../App.css"


export default function CoreSubjects({ subject }) {
  const renderSubjects = () => {
    return subject.map((subject) => {
      return (
        <li>
          <div className="col-2 subs">
            <h6>{subject}</h6>
          </div>
        </li>
      );
    });
  };

  if (subject) {
    return (
      <div>
        <div>
          <div className="core-area">
            <h2>Core Subjects</h2>
            <ul className="subjects">
              {renderSubjects()}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="null-area"></div>;
  }
}

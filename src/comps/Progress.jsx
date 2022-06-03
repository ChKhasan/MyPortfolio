import React from "react";

const Progress = ({ title, width }) => {
  return (
    <div className="progress d-flex flex-column">
      <span className="skill">
        {title}
        <i className="val">{width}%</i>
      </span>
      <div className="progress-bar-wrap ">
        <div
          style={{ width: `${width}%` }}
          className="progress-bar "
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Progress;

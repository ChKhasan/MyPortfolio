import React from "react";

const Progress = (props) => {


  return (
    <div className="progress d-flex flex-column">
      <span className="skill">
        {props.title}
        <i className="val">{props.width}%</i>
           
      </span>
      <div className="progress-bar-wrap ">
 
        <div
          style={{ width: `${props.width}%` }}
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

import React from "react";
import { dataProgress } from "../dataObj/dataProgress";
import CompHeader from "./CompHeader";
import Progress from "./Progress";

const Skills = () => {
  return (
    <div className="container-fluid skills p-60" id="skills">
      <div className="container mt-5 about">
        <CompHeader title="Skills" />
        <div className="row">
          <DrawProgress id={1} />
          <DrawProgress id={2} />
        </div>
      </div>
    </div>
  );
};

const DrawProgress = ({ id }) => {
  return (
    <div
      className="col-lg-6"
      data-aos-once="true"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {dataProgress
        .filter((element) => element.id === id)
        .map((item, index) => (
          <Progress key={index} {...item} />
        ))}
    </div>
  );
};

export default Skills;

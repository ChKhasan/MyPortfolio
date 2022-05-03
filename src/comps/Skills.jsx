import React from "react";
import CompHeader from "./CompHeader";
import Progress from "./Progress";

const Skills = () => {

  const progress = [
    {
      id: 1,
      title: "HTML",
      width: 100,
    },
    {
      id: 1,
      title: "CSS",
      width: 90,
    },
    {
      id: 1,
      title: "JAVASCRIPT",
      width: 75,
    },
    {
      id: 1,
      title: "JQUERY",
      width: 80,
    },
    {
      id: 2,
      title: "BOOTSTRAP",
      width: 90,
    },
    {
      id: 2,
      title: "REACT JS",
      width: 55,
    },
    {
      id: 2,
      title: "REDUX",
      width: 90,
    },
    {
      id: 2,
      title: "GIT",
      width: 55,
    },
  ];

  return (
    <div className="container-fluid skills p-60" id="skills">
      <div className="container mt-5 about">
        <CompHeader
          text="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
          title="Skills"
        />
        <div className="row">
          <div className="col-lg-6" data-aos-once="true"    data-aos="fade-up" data-aos-duration="1200">
            {progress
              .filter((item1) => item1.id === 1)
              .map((item, index) => (
                <Progress {...item} />
              ))}
          </div>
          <div className="col-lg-6" data-aos-once="true"    data-aos="fade-up" data-aos-duration="1200">
            {progress
              .filter((item1) => item1.id === 2)
              .map((item, index) => (
                <Progress {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

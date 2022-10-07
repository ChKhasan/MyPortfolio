import React from "react";
import "animate.css";
import WaterAnime from "./WaterAnime";

const Banner = () => {
  return (
    <div
      className="banner container-fluid d-flex justify-content-center align-items-center"
      id="home"
      
    >
      <WaterAnime />
      <div
        style={{ height: "100vh" ,}}
        className="container d-flex justify-content-center align-items-center flex-column"
        data-aos="fade-in"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div
          style={{ width: "30%" }}
          className=" d-flex justify-content-center flex-column"
        >
          <div className="d-flex anim ">
            <h1>Khasan</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

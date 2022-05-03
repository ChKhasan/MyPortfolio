import React from "react";
import Particles from "react-tsparticles";
import TypeAnimation from "react-type-animation";
import Backround from "./Backround";
import "animate.css";
import WaterAnime from "./WaterAnime";


const Banner = () => {
const addClass = (e) => {
  let an = document.getElementById("er");
  an.classList.add("animate__animated animate__bounce")
  console.log(e.target);
  console.log();

    // e.target.classList.add("animate__animated animate__rubberBand")
}

  return (
    <div
      className="banner container-fluid d-flex justify-content-center align-items-center"
      id="home"
    >
      {/* <Backround /> */}
      <WaterAnime />
      <div
        className="container d-flex justify-content-center align-items-center flex-column"
        data-aos="fade-in"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div style={{width: "30%"}} className=" d-flex justify-content-center flex-column">
         
          <div className="d-flex anim ">
            {/* <h1 id="er" onMouseEnter={(e) => addClass(e)}  className="animate__animated animate__rubberBand">Khasan</h1 > */}
            <h1 >Khasan</h1>
          </div>

         {/* <span className="d-in"> <p>I'am </p>
          <TypeAnimation
            cursor={true}
            sequence={[" Developer", 1000, " Gamer", 1000, " Programmer", 1000]}
            wrapper="h2"
            repeat={Infinity}
            className="animText"
          /></span> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;

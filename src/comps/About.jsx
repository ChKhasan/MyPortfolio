import React from "react";
import CompHeader from "./CompHeader";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import { dataAbout } from "../dataObj/dataAbout";
import Tilt from "react-parallax-tilt";

// import './TiltImg.demozap.scss';

const About = () => {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);

  return (
    <div className="container-fluid p-60 zindex" id="about">
      <div className="container mt-5 about">
        <CompHeader title="About" />
        <div className="row">
          <div
            className="col-lg-4 mt-4 img-anim position-relative"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            {/* <animated.img
              className="anime-img"
              style={{ ...style, width: "100%", height: "auto" }}
              src="Images/IMG_20211115_234554.jpg"
              ref={ref}
              {...mouseHandlers}
              alt=""
            /> */}
            <Tilt
            className="anime-img"
            >
              <img
              
                style={{  width: "100%"}}
                src="Images/IMG_20211115_234554.jpg"
                className="inner-element anime-img"
                alt="pic"
              />
            </Tilt>
            {/* <div id="image"></div>
            <div id="image2"></div> */}
          </div>
          <div
            className="col-lg-8 mt-4"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <h3>Frond End Web Developer.</h3>
            <p className="italic-p">Brief and basic information about myself</p>
            <div className="row">
              <MyDatas status={true} />
              <MyDatas status={false} />
            </div>
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <h4 className="download_resume_title" >
                  Download Resume
                </h4>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <a className="download_resume" href="resume/myResume.pdf" download>Download</a>
              </div>
            </div>
            {/* <div className="row mt-2">
              <div className="col-12">
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque. Aliquid amet
                  quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                  culpa magni laudantium dolores.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const MyDatas = ({ status }) => {
  return (
    <div className=" col-lg-6">
      <ul>
        {dataAbout
          .filter((element) => element.status === status)
          .map((item,index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right "
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>

              <strong style={{ marginRight: "10px" }}>{item.title}</strong>
              <span>{item.text}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default About;

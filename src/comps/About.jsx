import React from "react";
import CompHeader from "./CompHeader";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
const About = () => {
  const data = [
    {
      title: "Birthday:",
      text: "14 May 1999",
    },
    {
      title: "Website:",
      text: "www.example.com",
    },
    {
      title: "Phone:",
      text: "+998 99 730 14 99",
    },
    {
      title: "City:",
      text: "Tashkent, Uzb",
    },
  ];
  const data2 = [
    {
      title: "Age:",
      text: "23",
    },
    {
      title: "Degree:",
      text: "Master",
    },
    {
      title: "PhEmailone:",
      text: "chulliyevhasan1499@mail.com",
    },
    {
      title: "Freelance:",
      text: "Available",
    },
  ];
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);
  return (
    <div className="container-fluid p-60 zindex" id="about">
      <div className="container mt-5 about">
        <CompHeader
          // text="a"
          title="About"
        />
        <div className="row">
          <div
            className="col-lg-4 mt-4"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <animated.img
            className="anime-img"
              style={{ ...style, width: "100%", height: "auto" }}
              src="Images/IMG_20211115_234554.jpg"
              ref={ref}
              {...mouseHandlers}
              alt=""
            />
          </div>
          <div
            className="col-lg-8 mt-4"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <h3>UI Designer Web Developer.</h3>
            <p className="italic-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className=" col-lg-6">
                <ul>
                  {data.map((item) => (
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right "
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>

                      <strong style={{ marginRight: "10px" }}>
                        {item.title}
                      </strong>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" col-lg-6">
                <ul>
                  {data2.map((item, index) => (
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
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>

                      <strong style={{ marginRight: "10px" }}>
                        {item.title}
                      </strong>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row mt-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState } from "react";
import CompHeader from "./CompHeader";
import PureCounter from "@srexi/purecounterjs";
import AOS from "aos";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Facts = () => {
  AOS.init();

  new PureCounter({
    selector: ".purecounter",
    start: 0,
    end: 100,
    duration: 2,
    delay: 10,
    once: true,
    repeat: false,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: false,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <div className="container-fluid p-60">
      <div className="container mt-5 facts">
        <CompHeader
          text="Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas."
          title="Facts"
        />
        <div className="row">
          <div
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-duration="1200"
            className="col-lg-3 col-md-6 d-flex flex-column align-items-start count mt-3"
          >
            <div className="count-box d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                fill="currentColor"
                className="bi bi-emoji-smile"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>

              <CountUp start={viewPortEntered ? null : 0} end={232}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <h1 ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </div>
            <p>
              <strong>Happy Clients</strong> consequuntur quae
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-duration="1200"
            className="col-lg-3 col-md-6 d-flex flex-column align-items-start count mt-3"
          >
            <div className="count-box d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                fill="currentColor"
                className="bi bi-journal-richtext"
                viewBox="0 0 16 16"
              >
                <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
              <h1>
                {" "}
                <CountUp start={viewPortEntered ? null : 0} end={521}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <h1 ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
              </h1>
            </div>
            <p>
              <strong>Projects </strong> adipisci atque cum quia aut
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-duration="1200"
            className="col-lg-3 col-md-6 d-flex flex-column align-items-start count mt-3"
          >
            <div className="count-box d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                fill="currentColor"
                className="bi bi-headset"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
              </svg>
              <h1>
                {" "}
                <CountUp start={viewPortEntered ? null : 0} end={1453}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <h1 ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
              </h1>
            </div>
            <p>
              <strong>Hours Of Support</strong> aut commodi quaerat
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-duration="1200"
            className="col-lg-3 col-md-6 d-flex flex-column align-items-start count mt-3"
          >
            <div className="count-box d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                fill="currentColor"
                className="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
              <h1>
                {" "}
                <CountUp start={viewPortEntered ? null : 0} end={32}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <h1 ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
              </h1>
            </div>
            <p>
              <strong>Hard Workers</strong> rerum asperiores dolor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;

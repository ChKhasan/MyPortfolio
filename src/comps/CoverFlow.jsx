import React from "react";
import Coverflow from "react-coverflow";
import CompHeader from "./CompHeader";

const CoverFlow = () => {
  const fn = function () {
    /* do your action */
  };
  return (
    <div
      className="container-fluid p-60"
      style={{ background: "#f5f8fd" }}
      id="portfolio"
    >
      <div className="container-xxl">
        <CompHeader title="Portfolio" />
        <Coverflow
          width="960"
          height="500"
          displayQuantityOfSide={2}
          navigation={false}
          enableScroll={true}
          clickable={true}
          active={0}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img
              src="./Images/Screenshot from 2022-05-03 21-27-58.png"
              alt="title or description"
              data-action="https://ecstatic-aryabhata-30dd3d.netlify.app/"
              style={{
                display: "block",
                width: "100%",
              }}
            />
          </div>
          <img
            src="./Images/Screenshot from 2022-05-03 21-27-58.png"
            alt="title or description"
            data-action="https://ecstatic-aryabhata-30dd3d.netlify.app/"
          />
          <img
            src="./Images/IMG_20211115_234554.jpg"
            alt="title or description"
          />
          <img
            src="./Images/Screenshot from 2022-05-03 20-22-13.png"
            alt="title or description"
            data-action="https://ecommerce-pizza.netlify.app/"
          />
          <img
            src="./Images/Screenshot from 2022-05-03 21-38-24.png"
            alt="title or description"
            data-action="https://linked-in-36.netlify.app/"
          />
          <img
            src="./Images/Screenshot from 2022-05-03 21-45-59.png"
            alt="title or description"
            data-action="https://ionic-first-change.netlify.app/"
          />
          <img
            src="./Images/Screenshot from 2022-05-03 21-50-48.png"
            alt="title or description"
            data-action="https://product2-online.netlify.app/"
          />
          <img
            src="./Images/Screenshot from 2022-05-03 21-54-48.png"
            alt="title or description"
            data-action="https://online-food-shopone.netlify.app/"
          />
          <img
            src="./Images/Screenshot from 2022-05-03 22-00-09.png"
            alt="title or description"
            data-action="https://proect-safia-bakery-github.netlify.app/"
          />
          <img
            src="./Images/Screenshot from 2022-05-03 22-05-35.png"
            alt="title or description"
            data-action="https://comfy-muffin-8a2a13.netlify.app/"
          />
          <img
            src="./Images/Screenshot from 2022-05-03 22-08-31.png"
            alt="title or description"
            data-action="https://api-jsonplacholder.netlify.app/"
          />
          <img
            src="./Images/Screenshot from 2022-05-03 22-15-29.png"
            alt="title or description"
            data-action="https://cardmon-c2.netlify.app/"
          />
          <img
            src="./Images/Screenshot from 2022-05-03 22-18-34.png"
            alt="title or description"
            data-action="https://xenodochial-jones-29db7f.netlify.app/"
          />
        </Coverflow>
      </div>
    </div>
  );
};

export default CoverFlow;

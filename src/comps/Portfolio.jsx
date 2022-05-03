import React, { useState } from "react";
import CompHeader from "./CompHeader";
import PortfolioCard from "./PortfolioCard";
import AOS from 'aos';

const Portfolio = () => {
  AOS.init();

  const projects = [
    {
      status: "app",
      link: "https://admirable-peony-7b4531.netlify.app/",
      img: "Images/Screenshot from 2022-03-31 21-22-12.png",
    },
    {
      status: "web",
      link: "https://pizza-c2.netlify.app/",
      img: "Images/Screenshot from 2022-03-31 21-18-16.png",
    },
    {
      status: "todo",
      link: "https://cardmon-c2.netlify.app/",
      img: "Images/Screenshot from 2022-03-31 21-49-42.png",
    },
    {
      status: "app",
      link: "https://todo-app-5.netlify.app/",
      img: "Images/Screenshot from 2022-03-31 21-52-12.png",
    },
    {
      status: "todo",
      link: "https://cardmon-c2.netlify.app/",
      img: "Images/Screenshot from 2022-03-31 21-49-42.png",
    },
    {
      status: "web",
      link: "https://pizza-c2.netlify.app/",
      img: "Images/Screenshot from 2022-03-31 21-18-16.png",
    },
    {
      status: "todo",
      link: "https://cardmon-c2.netlify.app/",
      img: "Images/Screenshot from 2022-03-31 21-49-42.png",
    },
    {
      status: "todo",
      link: "https://cardmon-c2.netlify.app/",
      img: "Images/Screenshot from 2022-03-31 21-49-42.png",
    },
    {
      status: "todo",
      link: "https://todo-app-5.netlify.app/",
      img: "Images/Screenshot from 2022-03-31 21-52-12.png",
    },
    {
      status: "todo",
      link: "https://todo-app-5.netlify.app/",
      img: "Images/Screenshot from 2022-03-31 21-52-12.png",
    }
  ];
const [category,setCategory] = useState("all")
  const chooseCategory = (val) => {
    setCategory(val)
   
  }
  return (
    <div className="container-fluid skills p-60">
      <div className="container mt-5 about" id="portfolio">
        <CompHeader
          text="Here are a few design projects I've worked on recently. Want to see more? Email me."
          title="Portfolio"
        />

        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <ul id="portfolio-flters"  data-aos="fade-up"  className="btn-group" role="group" aria-label="Basic example"  data-aos-mirror="true"
    data-aos-once="true" data-aos-duration="1200">
              <li type="button"    onClick={() => chooseCategory("all")}>
                 <button type="button" className="active">ALL</button>
              </li>
              <li type="button" className="active"  onClick={() => chooseCategory("app")}>
                <button type="button" className="active">APP</button>
              </li>
              <li type="button" className="active" onClick={() => chooseCategory("todo")}>
                <button type="button" className="active">TODO</button>
               
              </li>
              <li type="button" className="active"  onClick={() => chooseCategory("web")}>
              <button type="button" className="active">WEB</button>

              </li>
            </ul>
  
          </div>
        </div>
        <div
          className="row portfolio-container"
          style={{ position: "relative", }}
        >
          {projects.filter(val => (category === "all" ? val.status !== category:val.status === category)).map((item, index) => (
            <PortfolioCard {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

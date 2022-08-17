import React, { useEffect, useState } from "react";
import { Affix, Button } from "antd";
import ScrollToTop from "react-scroll-to-top";
import { dataAffixId } from "../dataObj/dataAffixId";
import { Link } from "react-router-dom";
import { TOKEN } from "../const/API";
const AffixMenu = () => {
  const TOP = 0.1
  const [isVisible, setIsVisible] = useState(false);
  const authToken = localStorage.getItem(TOKEN)
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollAffix);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const scrollAffix = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

      dataAffixId.forEach(item => {
        let comps = document.getElementById(item.idComps);
        let elementId = document.querySelector(item.idA);
      
      if (
        comps.offsetTop <= winScroll &&
        comps.offsetTop + comps.offsetHeight >= winScroll
      ) {
        elementId.classList.add("actions");
      } else {
        elementId.classList.remove("actions");
      }
    })
  };

  const listenToScroll = () => {
    let comps = document.getElementById('home');

    let heightToHideFrom = comps.offsetHeight;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
      document.querySelector(".ant-affix").style.background = "linear-gradient(to right ,transparent,#fff, #fff,#fff)";
      dataAffixId.map(item => document.querySelector(item.idA).style.color = "#6f7180")
  document.querySelector('.actions').style.color = '#149ddd';


    } else {
      setIsVisible(true);
      document.querySelector(".ant-affix").style.background = "transparent";
      dataAffixId.map(item => document.querySelector(item.idA).style.color = "white")
    }
  };

  return (
    <div className="d-none d-lg-block">
      <ScrollToTop smooth color="#fff" style={{borderRadius: "50%",background: "#149ddd"}}/>
      <Affix
        data-spy="nav-color"
        data-offset-top="0"
        className="d-flex justify-content-center"
        style={{ position: "fixed", zIndex: "3", width: "100%" }}
        offsetTop={TOP}
      >
        <nav id="navbar" className="nav-menu navbar d-flex justify-content-end">
          <ul className="d-flex">
            <li>
              <a className="nav-link scrollto2 home" role="group" href="#home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto2 about" role="group" href="#about">
                <span>About</span>
              </a>
            </li>
            
       
            <li>
              <a className="nav-link scrollto2 portfolio" role="group" href="#portfolio">
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto2 service" role="group" href="#service">
                <span>Services</span>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto2 contact" role="group" href="#contact">
                <span>Contact</span>
              </a>
            </li>
            {/* <li> */}
              {/* {
                authToken ? <Link to="/message" className="nav-link scrollto2 contact" role="group" href="#contact">
                <span>Profile</span> */}
             {/* <Link to="/login" className="nav-link scrollto2 contact" role="group" href="#contact">
                {authToken ? <span>Profile</span>:<span>LogIn</span>}
              </Link>
            
              
            </li> */}
          </ul>
        </nav>
    
      </Affix>
    </div>
  );
};

export default AffixMenu;

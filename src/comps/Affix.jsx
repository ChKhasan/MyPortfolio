import React, { useEffect, useState } from "react";
import { Affix, Button } from "antd";
import About from "./About";
import ScrollToTop from "react-scroll-to-top";
const AffixMenu = () => {
  const [top, setTop] = useState(0.1);
  const [isVisible, setIsVisible] = useState(false);
  const [add, setAdd] = useState([
    {
      idComps: "about",
      idA: ".about",
    },
    {
      idComps: "home",
      idA: ".home",
    },

    {
      idComps: "portfolio",
      idA: ".portfolio",
    },
    {
      idComps: "service",
      idA: ".service",
    },
    {
      idComps: "contact",
      idA: ".contact",
    }

  ]);

  console.log(top);
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

      add.forEach(item => {
        let comps = document.getElementById(item.idComps);
        let a = document.querySelector(item.idA);
      
      if (
        comps.offsetTop <= winScroll &&
        comps.offsetTop + comps.offsetHeight >= winScroll
      ) {
        a.classList.add("ac");
      } else {
        a.classList.remove("ac");
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
    add.map(item => document.querySelector(item.idA).style.color = "#6f7180")
  document.querySelector('.ac').style.color = '#149ddd';


    } else {
      setIsVisible(true);
      document.querySelector(".ant-affix").style.background = "transparent";
    add.map(item => document.querySelector(item.idA).style.color = "white")
console.log(window.screen.height);
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
        offsetTop={top}
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
            
            {/* <li>
              <a
                id="aa"
                className="nav-link scrollto2 resume"
                role="group"
                href="#resume"
              >
                <span>Resume</span>
              </a>
            </li> */}
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
          </ul>
        </nav>
        {/* <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button> */}
      </Affix>
    </div>
  );
};
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

/**
 * Navbar links active state on scroll
 */
let navbarlinks = select("#navbar .scrollto2", true);
const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = select(navbarlink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
};
export default AffixMenu;

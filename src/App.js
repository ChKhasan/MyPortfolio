import logo from "./logo.svg";
import "./App.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import {
  About,
  Affix,
  Backround,
  Banner,
  Contact,
  Drawer,
  Facts,
  Footer,
  Portfolio,
  Resume,
  Service,
  Skills,
  Testimonials,
} from "./comps";
import PureCounter from "@srexi/purecounterjs";
import AOS from "aos";
import BallAnimate from "./comps/BallAnimate";
import CoverFlow from "./comps/CoverFlow";
function App() {
  AOS.init();

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const pure = new PureCounter();
  return (
    <>
      <Affix />
      <Drawer />
      <Banner />
      <About />
      {/* <Facts /> */}
      <Skills />
      <CoverFlow />
      {/* <Resume /> */}
      {/* <Portfolio /> */}
      <Service />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />

    </>
  );
}

export default App;

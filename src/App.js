import "./App.css";
import {
  batch,
  Fade,
  FadeIn,
  Move,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import PureCounter from "@srexi/purecounterjs";
import AOS from "aos";
import AdminP from "./admin/";
import PortfolioP from "./pages/";
import LogIn from "./pages/LogIn";
import RegistrationP from "./admin/RegistrationP";


function App() {
  AOS.init();

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const pure = new PureCounter();
  return (
    <>
      <PortfolioP />
      {/* <LogIn /> */}
      {/* <AdminP /> */}
      {/* <RegistrationP /> */}
   </>
  );
}

export default App;

import { useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";

import setSplitText from "./utils/splitText";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";

import { setHtmlTimeline, setAllTimeline } from "./utils/GsapScroll";

const MainContainer = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    // Trigger loading completion since 3D model is removed
    const progress = setProgress(setLoading);
    progress.loaded().then(() => {
      // Trigger scroll animations after loader finishes
      setHtmlTimeline();
      setAllTimeline();
    });

    const resizeHandler = () => {
      setSplitText();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <WhatIDo />
            <Career />
            <Work />

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

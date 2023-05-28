import { useEffect, useState } from "react";
import AboutMe from "../about-me/about-me";
import Banner from "../banner/banner";
import Experience from "../experience/experience";
import Portfolio from "../portfolio/portfolio";
import SideLinks from "../side-links";
import useWindowSize from "../../utils/hooks";
import HomeFullpage from "./home-fullpage";

const lgScreen: number = 1024;
const lgScreenHeight: number = 920;

export default function Home() {
  const size = useWindowSize();
  const [screenSize, getDimension] = useState({
    dynamicWidth: typeof window !== "undefined" ? window.innerWidth : lgScreen,
    dynamicHeight:
      typeof window !== "undefined" ? window.innerHeight : lgScreenHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth:
        typeof window !== "undefined" ? window.innerWidth : lgScreen,
      dynamicHeight:
        typeof window !== "undefined" ? window.innerHeight : lgScreenHeight,
    });
  };

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("resize", setDimension);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <>
      {size.width > 1024 && size.height > 920 && <HomeFullpage />}

      <div className="h-full w-screen lg:hidden short:!block">
        <div className="bg-bgDark bg-cover bg-bottom text-light w-full">
          <Banner />
        </div>
        <div className="bg-gradient-to-b	from-bgDark to-purple">
          <AboutMe />
        </div>
        <div className="bg-gradient-to-t	from-bgDark to-purple">
          <Portfolio />
        </div>
        <div className="bg-gradient-to-b	from-bgDark to-purple">
          <Experience />
        </div>
      </div>
      <SideLinks />
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </>
  );
}

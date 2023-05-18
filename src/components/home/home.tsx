import { useEffect, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import AboutMe from "../about-me/about-me";
import Banner from "../banner/banner";
import Experience from "../experience/experience";
import { CustomControls } from "../fullpage-tools";
import Portfolio from "../portfolio/portfolio";
import SideLinks from "../side-links";

const lgScreen: number = 1024;
const lgScreenHeight: number = 920;

export default function Home() {
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
      <div className="hidden lg:grid !short:hidden">
        <FullPage
          controls={
            screenSize.dynamicWidth >= lgScreen &&
            screenSize.dynamicHeight >= lgScreenHeight
              ? CustomControls
              : ""
          }
          scrollMode={
            screenSize.dynamicWidth >= lgScreen &&
            screenSize.dynamicHeight >= lgScreenHeight
              ? "full-page"
              : "normal"
          }
          duration={100}
        >
          <Slide className="bg-[url('/src/images/bg/galaxy_banner.jpg')] bg-cover bg-bottom text-light ">
            <Banner />
          </Slide>
          <Slide className="bg-gradient-to-b	from-bgDark to-purple">
            <AboutMe />
          </Slide>
          <Slide className="bg-gradient-to-t	from-bgDark to-purple">
            <Portfolio />
          </Slide>
          <Slide className="bg-gradient-to-b	from-bgDark to-purple">
            <Experience />
          </Slide>
        </FullPage>
      </div>
      <div className="h-full w-screen lg:hidden">
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

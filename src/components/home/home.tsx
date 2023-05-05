import { useEffect, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import Banner from "../banner/banner";
import Experience from "../experience/experience";
import { CustomControls } from "../fullpage-tools";
import Portfolio from "../portfolio/portfolio";

const lgScreen: number = 1024;
const lgScreenHeight: number = 920;
const firstRoute: number = 3;

const sectionArray = ["banner", "portfolio", "experience", "education"];

export default function Home({}: any) {
  const [screenSize, getDimension] = useState({
    dynamicWidth: typeof window !== "undefined" ? window.innerWidth : lgScreen,
    dynamicHeight:
      typeof window !== "undefined" ? window.innerHeight : lgScreenHeight,
  });

  const [initialSlide, setInitialSlide] = useState(
    window.location.href.split("/")[firstRoute]
  );
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const splitUrl = window.location.href.split("/");
    if (splitUrl.length === 5) {
      splitUrl.push(
        sectionArray[currentSlideIndex === -1 ? 0 : currentSlideIndex]
      );
      window.history.replaceState({}, "", splitUrl.join("/"));
    } else {
      if (splitUrl.length > 6) {
        splitUrl.pop();
      }
      if (
        decodeURIComponent(splitUrl[splitUrl.length - 1]) !==
        sectionArray[currentSlideIndex]
      ) {
        splitUrl[splitUrl.length - 1] = sectionArray[currentSlideIndex];
        window.history.replaceState({}, "", splitUrl.join("/"));
      }
    }
  }, [currentSlideIndex]);

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

  const beforeChange = (e: any) => {
    setCurrentSlideIndex(e.to);
  };
  return (
    <>
      <div className="hidden lg:grid">
        <FullPage
          controls={
            screenSize.dynamicWidth >= lgScreen &&
            screenSize.dynamicHeight >= lgScreenHeight
              ? CustomControls
              : ""
          }
          beforeChange={beforeChange}
          scrollMode={
            screenSize.dynamicWidth >= lgScreen &&
            screenSize.dynamicHeight >= lgScreenHeight
              ? "full-page"
              : "normal"
          }
          initialSlide={initialSlide}
          duration={100}
        >
          <Slide className="bg-[url('/src/images/bg/galaxy_banner.jpg')] bg-cover bg-bottom text-light ">
            <Banner />
          </Slide>
          <Slide className="bg-bgDark">
            <Portfolio />
          </Slide>
          <Slide className="bg-gradient-to-b	from-bgDark to-purple">
            <Experience />
          </Slide>
          <Slide className="bg-purple">
            <div></div>
          </Slide>
        </FullPage>
      </div>
      <div className="h-full lg:hidden">
        <div>
          <Banner />
        </div>
        <div>
          <Portfolio />
        </div>

        <div></div>

        <div></div>
      </div>
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

"use client";
import { HomeIcon } from "./icons";
import { DotIcon } from "./icons";

export const CustomControls = (props: any) => {
  let currentSlideIndex = props.getCurrentSlideIndex();
  return (
    <ul className="h-fit fixed top-1/2 -translate-y-1/2 grid grid-cols-1 gap-y-4 right-4 rounded-full py-2 justify-items-center z-10">
      {Array.from({ length: props.slidesCount }).map((slide, index) => {
        return (
          <li className="w-4 h-4 grid place-items-center" key={index}>
            <button
              onClick={() => props.scrollToSlide(index)}
              className={`${
                currentSlideIndex === index ? "text-primary" : "text-[#7C4A48]"
              }`}
            >
              {index === 0 ? (
                <div>
                  <HomeIcon
                    color={
                      props.getCurrentSlideIndex() === 0 ? "#F9A28F" : "#7C4A48"
                    }
                  />
                </div>
              ) : (
                <DotIcon />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

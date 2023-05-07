import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import githubIcon from "../../images/icons/github-icon.svg";
import websiteIcon from "../../images/icons/website.png";
import { cardsData } from "../../utils/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PortfolioSwiper({}: any) {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="h-full w-full"
    >
      {cardsData.map((card) => (
        <SwiperSlide>
          <Card cardData={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function Card({ cardData }: any) {
  return (
    <>
      <a
        className="relative flex justify-center items-center h-full"
        href={cardData.link}
        target="_blank"
      >
        <img
          src={cardData.image}
          className="w-full object-cover object-top h-full"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-shadow lg:opacity-0 duration-300 hover:opacity-100">
          <p className="absolute top-2 left-4 text-lg font-thin hidden md:block">
            Click to open
          </p>
          <div className="py-8 px-4 lg:py-24 lg:px-16 flex flex-col h-full justify-end gap-y-2 md:w-4/6 opacity-100">
            <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold pb-4">
              {cardData.title}
            </h3>
            <p className="text-lg lg:text-2xl font-medium">
              {cardData.description}
            </p>
            <p className="text-xs lg:text-md font-medium">{cardData.skills}</p>
            <div className="flex gap-x-3 items-center">
              <a href={cardData.githubLink} target="_blank">
                <img className="h-7" src={githubIcon} alt="Github's logo"></img>
              </a>
              <a
                href={cardData.link}
                target="_blank"
                className="text-lg self-end"
              >
                <img
                  className="h-[26.5px]"
                  src={websiteIcon}
                  alt="Github's logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

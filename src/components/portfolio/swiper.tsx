import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import githubIcon from "../../images/icons/github-icon.svg";
import { cardsData } from "../../utils/portfolio-info";

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
        <div className="absolute top-0 left-0 h-full w-full bg-shadow opacity-0 duration-300 hover:opacity-100">
          <div className="py-24 px-16 flex flex-col h-full justify-end gap-y-2 w-4/6">
            <h3 className="text-6xl font-bold pb-4">{cardData.title}</h3>
            <p className="text-2xl font-medium">{cardData.description}</p>
            <div className="flex gap-x-4 items-center">
              <a href={cardData.githubLink} target="_blank">
                <img
                  className="footer__media-icon"
                  src={githubIcon}
                  alt="Github's logo"
                ></img>
              </a>
              <a href={cardData.link} target="_blank" className="text-lg">
                Website
              </a>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

import { WrapperLarge } from "../wrappers";
import PortfolioSwiper from "./swiper";

export default function Portfolio({}: any) {
  return (
    <>
      <WrapperLarge className="grid-rows-1fr-auto gap-y-8 text-left text-light pb-16 max-h-screen">
        <div>
          <h2 className="text-primary font-bold text-2xl md:text-4xl lg:text-6xl">
            My Portfolio
          </h2>
        </div>
        <PortfolioSwiper />
      </WrapperLarge>
    </>
  );
}

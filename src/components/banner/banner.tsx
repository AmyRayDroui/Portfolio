import { WrapperLarge } from "../wrappers";

export default function Banner() {
  return (
    <>
      <div className="before:w-full h-min lg:before:h-full before:opacity-50 before:bg-[#0e0613] before:absolute before:top-0 before:left-0 after:-z-1">
        <WrapperLarge className="h-full grid-flow-row items-center content-center gap-y-6 text-left lg:absolute z-1">
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold w-max ">
            Hello,
            <br />
            I'm Amy,
            <br />A web developer
          </h1>
          <p className="md:text-2xl">Front End + Back End</p>
          {/*<div className="dot absolute top-52 left-96 h-1 w-1 bg-gray rounded-full"></div>*/}
        </WrapperLarge>
      </div>
      <style>{`
       .dot {
        animation: jumpingAnimation 0.6s ease-in forwards;
      }

      @keyframes jumpingAnimation {
        0 {
          transform: translate3d(0, 0,0);
        }
        100% {
          transform: translate3d(1000px, 300px, 0);
        }
      }
      
      `}</style>
    </>
  );
}

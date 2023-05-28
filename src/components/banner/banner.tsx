import { WrapperLarge } from "../wrappers";

export default function Banner() {
  return (
    <>
      <div className="before:w-full h-min short:before:!h-min lg:before:h-full before:opacity-50 before:bg-[#0e0613] before:absolute before:top-0 before:left-0 after:-z-1">
        <WrapperLarge className="h-full grid-flow-row items-center content-center gap-y-6 text-left lg:absolute short:!static top-0 z-1">
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
      <section className="hidden lg:block !short:hidden">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>
      <style>{`
       .star{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1)  ;
        animation:  animate 3s linear infinite;
    }
    .star::before{
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 300px;
        height: 1px;
        background: linear-gradient(90deg, #fff, transparent);
    }
    @keyframes animate {
        0%
        {
            transform: rotate(315deg) translateX(0);
            opacity: 1;
        }
        70%
        {
            opacity: 1;
        }
        100%
        {
            transform: rotate(315deg) translateX(-1000px);
            opacity: 0;
        }
        
    }
    .star:nth-child(1){
        top: -4px;
        right: 0;
        left:initial;
        animation-delay:1 ;
        animation-duration: 5s;
    }
    
    .star:nth-child(2){
        top: -4px;
        right: 80px;
        left:initial;
        animation-delay:1.5s;
        animation-duration: 4s;
    }
    
    .star:nth-child(3){
        top: 80px;
        right: 0px;
        left:initial;
        animation-delay:2s ;
        animation-duration: 5.5s;
    }
    
    .star:nth-child(4){
        top: -4px;
        right: 180px;
        left:initial;
        animation-delay:0.6s;
        animation-duration: 3.5s;
    }
    
    .star:nth-child(5){
        top: -4px;
        right: 300px;
        left:initial;
        animation-delay:2.5s;
        animation-duration: 3s;
    } 
      `}</style>
    </>
  );
}

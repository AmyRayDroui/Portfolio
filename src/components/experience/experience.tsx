import { WrapperLarge } from "../wrappers";
import spaceship from "../../images/bg/experience_3.png";

export default function Experience({}: any) {
  return (
    <>
      <WrapperLarge className="h-full grid-flow-row items-center content-start gap-y-6 text-left text-light relative">
        <h2 className="text-4xl font-bold w-max text-primary">Experience</h2>
        <img
          src={spaceship}
          className="absolute bottom-0 left-0 h-full w-full object-fill"
        />
        <div className="relative top-0 left-0 h-full w-5/6">
          <Job
            name="One Zero"
            years="2022-2023"
            img={{
              src: "https://onezero.co.il/logo-gif.gif",
              alt: "OneZero logo",
            }}
            className="top-[50px] right-[90px] xl:right-[140px]"
          />
          <Job
            name="Vayyar"
            years="2021-2022"
            img={{
              src: "https://vayyar.com/wp-content/uploads/2022/08/vayyar-logo.png",
              alt: "Vayyar Logo",
            }}
            className="top-[225px] right-[280px] xl:right-[350px]"
          />
          <Job
            name="Magshimim"
            years="2020-2021"
            img={{
              src: "https://rashi.org.il/wp-content/uploads/2020/11/לוגו-מגשימים-שקוף-05-3-e1611664622592.png",
              alt: "Magshimim Logo",
            }}
            className="top-[400px] right-[610px] xl:right-[750px]"
          />
        </div>
      </WrapperLarge>
    </>
  );
}

function Job({ top, lgRight, right, img, name, years, className }: any) {
  return (
    <>
      <div className={`absolute ${className}`}>
        <img src={img.src} alt={img.alt} className="h-16"></img>
        <h4 className="text-2xl font-bold">{name}</h4>
        <p>{years}</p>
      </div>
    </>
  );
}

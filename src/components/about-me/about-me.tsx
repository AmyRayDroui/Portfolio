import { WrapperLarge } from "../wrappers";
import profilePic from "../../images/Amy.png";

export default function AboutMe() {
  return (
    <>
      <WrapperLarge className="grid-rev-rows-1fr-auto lg:grid-cols-auto-1fr gap-x-8 h-full text-left text-light pb-16 max-h-screen">
        <img
          src={profilePic}
          className="rounded-full object-contain self-center max-h-[50vw] lg:max-h-[350px] lg:min-h-[200px] lg:min-w-[200px]"
        />
        <div className="grid grid-flow-rows lg:gap-y-8 h-full">
          <h2 className="text-primary font-bold text-2xl md:text-4xl lg:text-6xl self-end mb-7">
            About Me
          </h2>
          <div className="text-lg lg:text-2xl h-min flex flex-col">
            <p>Hi, I'm a web developer from Haifa, Israel.</p>
            <p>
              I have 2 years experience working in this field as a fullstack
              developer.
            </p>
            <p>
              I can work well in a team and on my own, both in office and
              remotely.
            </p>
            <p>
              I consider myself a curious person, I always seek to learn new
              things.
            </p>
            <a
              href="https://drive.google.com/file/d/18xGuJqfewF4Os-XSGooMMIjZRvFMa0ya/view?usp=sharing"
              target="_blank"
              type="application/pdf"
              rel="alternate"
              media="print"
              className="mt-6 text-md lg:text-xl w-max"
            >
              ➞ link to CV
            </a>
          </div>
        </div>
      </WrapperLarge>
    </>
  );
}

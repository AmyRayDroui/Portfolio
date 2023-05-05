import { WrapperLarge } from "../wrappers";

export default function Experience({}: any) {
  return (
    <>
      <WrapperLarge className="h-full grid-flow-row items-center content-center gap-y-6 text-left">
        <h2 className="text-4xl font-bold w-max ">Experience</h2>
        <p className="text-2xl">OneZero</p>
        <img
          src="https://onezero.co.il/logo-gif.gif"
          alt="Our logo, the word 'one' and underneath the word 'zero'"
          className=" h-10"
        ></img>
        <p className="text-2xl">Vayyar</p>
        <img
          width="295"
          height="72"
          src="https://vayyar.com/wp-content/uploads/2022/08/vayyar-logo.png"
          alt="Vayyar Logo"
          loading="lazy"
        ></img>
        <p className="text-2xl">Magshimim</p>
        <img
          width="324"
          height="229"
          src="https://rashi.org.il/wp-content/uploads/2020/11/לוגו-מגשימים-שקוף-05-3-e1611664622592.png"
          alt="לוגו מגשימים"
          decoding="async"
        ></img>
      </WrapperLarge>
    </>
  );
}

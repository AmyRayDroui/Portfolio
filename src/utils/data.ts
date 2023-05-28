import newsExplorer from "../images/projects/news-explorer-longer.png";
import aroundUs from "../images/projects/around-us-longer.png";
import familyProtection from "../images/projects/family-protection-longer.png";
import { cardData, JobData } from "../lib/interfaces";

const cardsData: cardData[] = [
  {
    image: newsExplorer,
    title: "News Explorer",
    description:
      "News Explorer allows you to search for up to date news that interests you and save them on your own personal account.",
    skills:
      "The Frontend uses React and the API is managed by Express with MongoDB",
    link: "https://www.amyray-newsexplorer.com/",
    githubLink: "https://github.com/AmyRayDroui/news-explorer-frontend",
  },
  {
    image: aroundUs,
    title: "Around The US",
    description:
      "Around The US gives you the opportunity to share your beautiful photos and rate others photo too",
    skills:
      "The Frontend uses React and the API is managed by Express with MongoDB",
    link: "https://www.amy-aroundus.com/",
    githubLink: "https://github.com/AmyRayDroui/react-around-api-full",
  },
  {
    image: familyProtection,
    title: "Family Protection",
    description:
      "Family Protection is an example of a small business website with contact us form and about us sections. It utilizes different locals.",
    skills: "The Frontend uses Next.js connected to DatoCMS via Graphql",
    link: "https://family-protection.herokuapp.com/",
    githubLink: "https://github.com/AmyRayDroui/family-protection",
  },
];

const experienceData: JobData[] = [
  {
    name: "One Zero",
    position: "Fullstack web developer",
    description:
      "I have built and maintained custom websites for clients remotely.",
    skills: [
      "Next.js",
      "Typescript",
      "Cypress",
      "MongoDB",
      "Tailwind CSS",
      "DatoCMS",
    ],
    years: "2022-2023",
    img: {
      src: "https://onezero.co.il/logo-gif.gif",
      alt: "OneZero logo",
    },
    className: "top-[50px] right-[90px] xl:right-[140px]",
    id: "onezero",
    dataTooltipId: "onezero-tooltip",
  },
  {
    name: "Vayyar",
    years: "2021-2022",
    position: "Fullstack web developer and data analyst",
    description:
      "I began by writing scripts with Python and later created a dashboard website.",
    skills: ["Python", "Pandas", "SQL", "Node.js", "Plotly"],
    img: {
      src: "https://vayyar.com/wp-content/uploads/2022/08/vayyar-logo.png",
      alt: "Vayyar Logo",
    },
    className: "top-[225px] right-[280px] xl:right-[350px]",
    id: "vayyar",
    dataTooltipId: "vayyar-tooltip",
  },
  {
    name: "Magshimim",
    years: "2020-2021",
    position: "Advanced Principals of Programming Teacher",
    description:
      "I taught an elite group of Highscoolers advanced concepts of programming in the C++ language.",
    skills: ["C++", "SQL", "Multithreading", "SOLID", "C#"],
    img: {
      src: "https://rashi.org.il/wp-content/uploads/2020/11/לוגו-מגשימים-שקוף-05-3-e1611664622592.png",
      alt: "Magshimim Logo",
    },
    className: "top-[400px] right-[610px] xl:right-[750px]",
    id: "magshimim",
    dataTooltipId: "magshimim-tooltip",
    place: "top",
  },
];

export { cardsData, experienceData };

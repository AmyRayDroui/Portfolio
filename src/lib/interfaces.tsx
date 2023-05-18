import { PlacesType } from "react-tooltip";

export interface JobData {
  name: string;
  position: string;
  description: string;
  skills: string[];
  years: string;
  img: {
    src: string;
    alt: string;
  };
  className: string;
  id: string;
  dataTooltipId: string;
  place?: PlacesType;
}

export interface cardData {
  image: string;
  title: string;
  description: string;
  skills: string;
  link: string;
  githubLink: string;
}

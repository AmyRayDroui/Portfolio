import { WrapperLarge } from "../wrappers";
import spaceship from "../../images/bg/experience_3.png";
import AppTooltip from "../app-tooltip";
import { experienceData } from "../../utils/data";
import { JobData } from "../../lib/interfaces";

export default function Experience() {
  return (
    <>
      <WrapperLarge className="h-screen grid-flow-row items-center content-start gap-y-6 text-left text-light relative lg:overflow-hidden">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold w-max text-primary">
          Experience
        </h2>
        <img
          src={spaceship}
          className="absolute -bottom-2 left-0 h-full w-full object-fill hidden lg:block short:hidden"
        />
        <div className="lg:absolute top-[120px] -left-[40px] h-full w-5/6">
          {experienceData.map((data: JobData) => (
            <Job data={data} />
          ))}
        </div>
      </WrapperLarge>
    </>
  );
}

function Job({ data }: { data: JobData }) {
  return (
    <>
      <div
        className={`lg:absolute ${data.className}`}
        data-tooltip-id={data.dataTooltipId}
      >
        <img src={data.img.src} alt={data.img.alt} className="h-16"></img>
        <h4 className="text-2xl font-bold">{data.name}</h4>
        <p>{data.years}</p>
      </div>
      <div className="text-sm relative flex flex-col gap-y-2 lg:hidden mb-8">
        <h3 className="text-2xl font-bold">{data.position}</h3>
        <p className="text-lg">{data.description}</p>
        <div>
          <label>Skills:</label>
          <p className="flex flex-wrap">
            {data.skills.map((skill: string, index: number) => (
              <span>{`${skill} ${
                index != data.skills.length - 1 ? "," : ""
              }`}</span>
            ))}
          </p>
        </div>
      </div>
      <JobTooltip data={data} />
    </>
  );
}

export function JobTooltip({ data }: { data: JobData }) {
  return (
    <AppTooltip
      id={data.dataTooltipId}
      place={data.place}
      classNameTooltip="z-20 max-w-[400px] !opacity-0 lg:!opacity-100 !drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] !rounded-lg"
    >
      <>
        <div className="text-sm relative flex flex-col gap-y-2">
          <h3 className="text-2xl font-bold">{data.position}</h3>
          <p className="text-lg">{data.description}</p>
          <div>
            <label>Skills:</label>
            <p className="flex flex-wrap">
              {data.skills.map((skill: string, index: number) => (
                <span>{`${skill} ${
                  index != data.skills.length - 1 ? "," : ""
                }`}</span>
              ))}
            </p>
          </div>
        </div>
      </>
    </AppTooltip>
  );
}

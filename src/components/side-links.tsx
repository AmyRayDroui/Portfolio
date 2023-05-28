import { ReactNode } from "react";
import { EmailIcon, GithubIcon, LinkedinIcon, PhoneIcon } from "./icons";

export default function SideLinks() {
  return (
    <>
      <div className="fixed top-20 right-0 z-[300] text-primary flex flex-col items-end gap-y-1 w-[70px]">
        <Link href="mailto:amyraydroui@gmail.com">
          <EmailIcon className="max-h-6 w-min ml-px" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/amy-ray-droui-webdeveloper/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon className="h-5 w-5 ml-px mt-px" />
        </Link>
        <Link href="tel:+972545704954" className="pb-3">
          <PhoneIcon className="max-h-7 w-min relative bottom-[3px] -left-1" />
        </Link>
        <Link href="https://github.com/AmyRayDroui" target="_blank">
          <GithubIcon className="h-6 w-6 " />
        </Link>
      </div>
    </>
  );
}

function Link({
  href,
  target = "_self",
  className = "",
  children,
  rel = "noreferrer",
}: {
  href: string;
  target?: string;
  className?: string;
  children: ReactNode;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      className={`border-4 rounded-l-xl p-2 pr-8 -mr-5 hover:-mr-1 h-12 w-16 bg-purple lg:bg-[rgba(0,0,0,0)] ${className}`}
      rel={rel}
    >
      {children}
    </a>
  );
}

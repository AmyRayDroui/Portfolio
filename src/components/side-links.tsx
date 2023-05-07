import { MailIcon } from "./icons";
import emailIcon from "../images/icons/email.png";

export default function SideLinks({ data }: any) {
  return (
    <>
      <div className="fixed top-20 right-0 z-100">
        <div className="max-h-6">
          <img className="h-full max-h-6" src={emailIcon} />
        </div>
      </div>
    </>
  );
}

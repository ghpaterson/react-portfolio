import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import titledark from "../public/dark/titledark.png";
import darkhero from "../public/dark/darkhero.png";
import titlelight from "../public/light/titlelight.png";
import lighthero from "../public/light/lighthero.png";

export default function Body({ darkMode }) {
  const gitHubUrl = "https://github.com/ghpaterson";
  const linkedInUrl = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="flex flex-col justify-center items-center my-20 lg:flex-row">
          <div>
            <Image src={darkMode ? titledark : titlelight} width={400} />
          </div>
          <div>
            <Image src={darkMode ? darkhero : lighthero} width={500} />
          </div>
        </div>
      </div>
    </>
  );
}

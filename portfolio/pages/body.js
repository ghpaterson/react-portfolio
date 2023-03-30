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
            {darkMode ? (
              <Image src={titledark} width={400} key={"titledark"} />
            ) : (
              <Image src={titlelight} width={400} key={"titlelight"} />
            )}
          </div>
          <div>
            {darkMode ? (
              <Image src={darkhero} width={500} key={"darkhero"} />
            ) : (
              <Image src={lighthero} width={500} key={"lighthero"} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

import { BsFillMoonFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  SiCss3,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { DiRuby } from "react-icons/di";
import Image from "next/image";
import avatar from "../public/avatar.png";

export default function Body({ darkMode, setDarkMode }) {
  const gitHubUrl = "https://github.com/ghpaterson";
  const linkedInUrl = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  const githubCVUrl = "https://github.com/ghpaterson/CV";
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <section className="min-h-screen">
          <nav className=" static py-10 mb-8 flex justify-end">
            <ul className="flex gap-0">
              <li>
                <a
                  className="text-gray-800 dark:text-gray-100 dark:hover:text-yellow-500 px-4 py-2 border-none rounded-md ml-2 mr-5"
                  href="/graeme-paterson-cv.pdf"
                  target="_blank"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-800 dark:text-gray-100 dark:hover:text-yellow-500 px-4 py-2 border-none rounded-md ml-2 mr-5"
                  href="/graeme-paterson-cv.pdf"
                  target="_blank"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-gray-800 dark:text-gray-100 dark:hover:text-yellow-500 px-4 py-2 border-none rounded-md ml-2 mr-5"
                  href="/graeme-paterson-cv.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <li>
                <BsFillMoonFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl ml-2 hover:animate-pulse text-gray-700 dark:text-yellow-500 "
                />
              </li>
            </ul>
          </nav>
          <div className=" mx-24">
            <div className=" bg-moonstone min-w-screen h-96 flex justify-center gap-20 items-center mt-14 rounded-xl dark:bg-transparent">
              <div className="text-center p-1">
                <h2 className="font-raleway text-5xl py-2 text-yellow-200 font-medium md:text-5xl sm:text-4xl dark:text-moonstone">
                  Hi, I'm Graeme.
                </h2>
                <h3 className="text-2xl py-2 text-gray-800 md:text-3xl dark:text-gray-100">
                  Software Developer
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-100">
                  Junior Full-Stack software developer with a focus on Frontend
                  development. Makers Academy graduate
                </p>
                <div className="text-3xl flex justify-center gap-16 py-2 text-yellow-200 cursor-pointer dark:text-gray-100">
                  <a
                    className=" dark:hover:text-moonstone"
                    href={linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    className=" dark:hover:text-moonstone"
                    href={gitHubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-b from-yellow-200 rounded-full w-80 h-80 mt-6 mb-8 overflow-hidden dark:bg-gradient-to-b dark:from-moonstone">
                <Image src={avatar} objectFit="cover" />
              </div>
            </div>
          </div>
          <div className="text-3xl flex justify-center gap-8 mt-12 py-4 text-gray-600  dark:text-gray-100">
            <SiJavascript />
            <DiRuby />
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <SiNextdotjs />
            <SiNodedotjs />
            <SiTailwindcss />
            <SiCss3 />
          </div>
        </section>
      </div>
    </>
  );
}

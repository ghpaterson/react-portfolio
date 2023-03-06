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
import { useState } from "react";

export default function Body({ darkMode, setDarkMode }) {
  const gitHubUrl = "https://github.com/ghpaterson";
  const linkedInUrl = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  const githubCVUrl = "https://github.com/ghpaterson/CV";
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <section className="min-h-screen">
          <nav className=" static py-10 mb-2 flex justify-between">
            <h1 className="text-xl ml-5 dark:text-gray-100"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl hover:animate-pulse text-gray-700 dark:text-yellow-500 "
                />
              </li>
              <li>
                <a
                  className="bg-yellow-500 text-gray-100 px-4 py-2 border-none rounded-md ml-8 mr-5"
                  href={githubCVUrl}
                  target="_blank"
                >
                  Github CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-1">
            <h2 className="font-raleway text-5xl py-2 text-yellow-500 font-medium md:text-5xl sm:text-4xl">
              Hi, I'm Graeme.
            </h2>
            <h3 className="text-2xl py-2 text-gray-700 md:text-3xl dark:text-gray-100">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-lg mx-auto dark:text-gray-100">
              Junior Full-Stack software developer with a focus on Frontend.
              Makers Academy graduate
            </p>
          </div>
          <div className="text-3xl flex justify-center gap-16 py-2 text-gray-600 cursor-pointer dark:text-gray-100">
            <a
              className=" dark:hover:text-yellow-500"
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              className=" dark:hover:text-yellow-500"
              href={gitHubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-yellow-500 rounded-full w-80 h-80 mt-6 mb-8 overflow-hidden sm:w-60 sm:h-60">
            <Image src={avatar} objectFit="cover" />
          </div>
          <div className="text-3xl flex justify-center gap-8 py-4 text-gray-600  dark:text-gray-100">
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

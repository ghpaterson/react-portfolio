import Head from "next/head";
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
import Ecoliday from "../public/Ecoliday.png";
import mineshaft from "../public/mineshaft.png";
import weather from "../public/weather.png";
import homepage from "../public/homepage.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const githubCVUrl = "https://github.com/ghpaterson/CV";
  const gitHubUrl = "https://github.com/ghpaterson";
  const linkedInUrl = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  const ecolidayUrl = "https://github.com/ghpaterson/Ecoliday";
  const mineshaftUrl = "https://github.com/ghpaterson/acebook-mineshaft";
  const weatherUrl = "https://github.com/ghpaterson/weather-app";
  const recipeaseURL = "https://github.com/ghpaterson/recipease";

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Graeme Paterson</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-gray-100 px-10 md:px-20 lg:px-30 dark:bg-gray-800">
          <section className="min-h-screen">
            <nav className="py-10 mb-2 flex justify-between">
              <h1 className="text-xl ml-5 dark:text-gray-100"></h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl hover:animate-pulse text-gray-700 dark:text-yellow-500"
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
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a href={gitHubUrl} target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-yellow-500 rounded-full w-96 h-96 mt-6 mb-6 overflow-hidden sm:w-64 sm:h-64">
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

          <section>
            <div className="flex justify-center pt-6 mt-10">
              <h3 className="text-5xl py-1 text-gray-700 dark:text-gray-100 dark:text-yellow-500">
                Projects
              </h3>
            </div>

            <div className="flex justify-center my-6">
              <div>
                <a href={ecolidayUrl} target="_blank" rel="noreferrer">
                  <h3 className="text-2xl hover:text-yellow-500 pb-2 text-gray-600 dark:text-gray-100 dark:hover:text-yellow-500">
                    {" "}
                    Ecoliday{" "}
                  </h3>
                </a>
                <p className="text-l pb-2 text-gray-600 dark:text-gray-100">
                  Users can estimate their carbon emissions based of travel
                  based on different modes of transport.
                </p>
                <Image src={Ecoliday} width={800} className="rounded-lg" />
              </div>
            </div>
            <div className="flex justify-center my-10 mb-6">
              <div>
                <a href={recipeaseURL} target="_blank" rel="noreferrer">
                  <h3 className="text-xl pb-2 hover:text-yellow-500 text-gray-600 dark:text-gray-100 dark:hover:text-yellow-500">
                    {" "}
                    Recipeas{" "}
                  </h3>
                </a>
                <p className="text-l pb-2 text-gray-600 dark:text-gray-100">
                  Food recipe library allowing users to browse by category or
                  search for ingredients using the Spoonacular API
                </p>
                <Image src={homepage} width={800} className="rounded-lg" />
              </div>
            </div>
            <div className="flex justify-center my-10">
              <div>
                <a href={mineshaftUrl} target="_blank" rel="noreferrer">
                  <h3 className="text-xl pb-2 hover:text-yellow-500 text-gray-600 dark:text-gray-100 dark:hover:text-yellow-500">
                    {" "}
                    Mineshaft{" "}
                  </h3>
                </a>
                <p className="text-l pb-2 text-gray-600 dark:text-gray-100">
                  Facebook clone using the MERN stack
                </p>
                <Image src={mineshaft} width={800} className="rounded-lg" />
              </div>
            </div>
            <div className="flex justify-center my-10 mb-6">
              <div>
                <a href={weatherUrl} target="_blank" rel="noreferrer">
                  <h3 className="text-xl pb-2 hover:text-yellow-500 text-gray-600 dark:text-gray-100 dark:hover:text-yellow-500">
                    {" "}
                    Weather App{" "}
                  </h3>
                </a>
                <p className="text-l pb-2 text-gray-600 dark:text-gray-100">
                  Weather based on your current location using the Open-Meteo
                  API
                </p>
                <Image src={weather} width={800} className="rounded-lg" />
              </div>
            </div>
          </section>
          <section>
            <div>
              <h1 className="text-xl ml-5 pb-10 dark:text-gray-100">
                Developed by Graeme Paterson
              </h1>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

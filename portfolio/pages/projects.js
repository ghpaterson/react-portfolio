import Footer from "./footer";
import NavBar from "./navBar";
import Image from "next/image";
import Head from "next/head";
import Ecoliday from "../public/Ecoliday.png";
import mineshaft from "../public/mineshaft.png";
import weather from "../public/weather.png";
import homepage from "../public/homepage.png";

import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { useState } from "react";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);
  const ecolidayUrl = "https://ecoliday-cxyz.onrender.com/";
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
        <main className="dark:bg-africanViolet px-10 md:px-20 lg:px-30">
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="flex justify-start ml-60">
            <h3 className="font-raleway text-5xl py-1 text-bittersweet dark:text-delft">
              Projects
            </h3>
          </div>

          <div className="flex justify-center my-10">
            <div>
              <div className="flex items-center gap-4 text-2xl text-gray-100 dark:text-gray-100">
                <a href={ecolidayUrl} target="_blank" rel="noreferrer">
                  <h3 className="text-3xl pb-2 mr-4 hover:text-bittersweet text-gray-100 dark:text-gray-100 dark:hover:text-delft">
                    {" "}
                    Ecoliday{" "}
                  </h3>
                </a>
                <SiJavascript />
                <SiMongodb />
                <SiExpress />
                <SiReact />
                <SiNodedotjs />
                <SiTailwindcss />
              </div>
              <p className="text-l pb-2 text-gray-100 dark:text-gray-100">
                Users can estimate their carbon emissions of their travel based
                on different modes of transport.
              </p>
              <Image
                src={Ecoliday}
                width={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="flex justify-center my-10">
            <div>
              <div className="flex items-center gap-4 text-2xl text-gray-100 dark:text-gray-100">
                <a href={recipeaseURL} target="_blank" rel="noreferrer">
                  <h3 className="text-3xl pb-2 mr-4 hover:text-bittersweet text-gray-100 dark:text-gray-100 dark:hover:text-delft">
                    {" "}
                    Recipeas{" "}
                  </h3>
                </a>
                <SiJavascript />
                <SiReact />
                <SiTailwindcss />
              </div>
              <p className="text-l pb-2 text-gray-100 dark:text-gray-100">
                Food recipe library allowing users to browse by category or
                search for ingredients using the Spoonacular API
              </p>
              <Image
                src={homepage}
                width={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="flex justify-center my-10">
            <div>
              <div className="flex items-center gap-4 text-2xl text-gray-100 dark:text-gray-100">
                <a href={mineshaftUrl} target="_blank" rel="noreferrer">
                  <h3 className="text-3xl pb-2 mr-4 hover:text-bittersweet text-gray-100 dark:text-gray-100 dark:hover:text-delft">
                    {" "}
                    Mineshaft{" "}
                  </h3>
                </a>
                <SiJavascript />
                <SiMongodb />
                <SiExpress />
                <SiReact />
                <SiNodedotjs />
                <SiTailwindcss />
              </div>
              <p className="text-l pb-2 text-gray-100 dark:text-gray-100">
                Facebook clone using the MERN stack
              </p>
              <Image
                src={mineshaft}
                width={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="flex justify-center my-10">
            <div>
              <div className="flex items-center gap-4 text-2xl text-gray-100 dark:text-gray-100">
                <a href={weatherUrl} target="_blank" rel="noreferrer">
                  <h3 className="text-3xl pb-2 hover:text-bittersweet text-gray-100 dark:text-gray-100 dark:hover:text-delft">
                    {" "}
                    Weather App{" "}
                  </h3>
                </a>
                <SiJavascript />
                <SiCss3 />
                <SiHtml5 />
              </div>
              <p className="text-l pb-2 text-gray-100 dark:text-gray-100">
                Weather based on your current location using the Open-Meteo API
              </p>
              <Image
                src={weather}
                width={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

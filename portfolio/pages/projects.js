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

export default function Projects({ darkMode, setDarkMode }) {
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
        <main className=" dark:bg-project-pattern">
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <section className="h-96 mb-32 md:mb-44 lg:mb-66">
            <div className="mx-24">
              <div className="min-w-screen h-96 flex justify-start items-center mt-20 rounded-xl dark:bg-transparent md:ml-32 md:mt-24">
                <div className="text-center p-1">
                  <h2 className="font-raleway text-4xl py-2 text-bittersweet font-medium md:text-5xl  dark:text-delft">
                    Projects
                  </h2>
                  <h3 className="text-2xl py-2 text-gray-100 md:text-3xl dark:text-gray-100"></h3>
                  <p className="text-md py-5 leading-8 text-gray-100 md:text-xl max-w-lg mx-auto dark:text-gray-100">
                    Welcome to my projects page! Here you'll find a collection
                    of my latest work, showcasing my skills in Software
                    Development, design, and more.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="flex justify-center">
            <div>
              <div className="flex flex-col justify-center items-center md:flex md:items-center md:justify-start gap-4 mb-6 text-3xl text-gray-100 dark:text-gray-100 ">
                <a href={ecolidayUrl} target="_blank" rel="noreferrer">
                  <h3 className="text-3xl pb-2 mr-4 hover:text-bittersweet text-gray-100 dark:text-delft dark:hover:text-delft">
                    {" "}
                    Ecoliday{" "}
                  </h3>
                </a>
                <div className="flex gap-2">
                  <SiJavascript />
                  <SiMongodb />
                  <SiExpress />
                  <SiReact />
                  <SiNodedotjs />
                  <SiTailwindcss />
                </div>
              </div>
              <div className="flex justify-center mx-4 text-justify md:justify-start md:mx-0">
                <p className=" text-sm pb-6 max-w-3xl text-gray-100 dark:text-gray-100 md:text-base">
                  Ecoliday has been developed to enable people to make a more
                  environmentally informed decision when planning a holiday. It
                  provides users with estimated CO2e emissions for different
                  destinations and vehicle types as well as suggesting local
                  alternatives
                </p>
              </div>
              <div className="mx-4 md:mx-0">
                <Image
                  src={Ecoliday}
                  width={800}
                  className="rounded-lg shadow-2xl mb-10"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-10">
            <div>
              <div className="flex flex-col justify-center items-center md:flex md:items-center md:justify-start gap-4 mb-6 text-2xl text-gray-100 dark:text-gray-100 ">
                <a href={recipeaseURL} target="_blank" rel="noreferrer">
                  <h3 className="text-3xl pb-2 mr-4 hover:text-bittersweet text-gray-100 dark:text-delft dark:hover:text-delft">
                    {" "}
                    Recipeas{" "}
                  </h3>
                </a>
                <div className="flex gap-2">
                  <SiJavascript />
                  <SiReact />
                  <SiTailwindcss />
                </div>
              </div>
              <div className="flex justify-center mx-4 text-justify md:justify-start md:mx-0">
                <p className="text-sm md:text-base pb-6 max-w-3xl text-gray-100 dark:text-gray-100">
                  Explore a vast collection of delicious recipes with this food
                  recipe library! The web-app allows users to browse recipes by
                  category or search for specific ingredients, thanks to the
                  Spoonacular API integration. Whether you're looking for
                  healthy meals, vegetarian options, or indulgent desserts, the
                  library has something for everyone. Start cooking up a storm
                  today and discover your new favorite dish with this
                  easy-to-use recipe library.
                </p>
              </div>
              <div className="mx-4 md:mx-0">
                <Image
                  src={homepage}
                  width={800}
                  className="rounded-lg shadow-2xl mb-10"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-10">
            <div>
              <div className="flex flex-col justify-center items-center md:flex md:items-center md:justify-start gap-4 mb-6 text-2xl text-gray-100 dark:text-gray-100 ">
                <a href={mineshaftUrl} target="_blank" rel="noreferrer">
                  <h3 className="text-3xl pb-2 mr-4 hover:text-bittersweet text-gray-100 dark:text-delft dark:hover:text-delft">
                    {" "}
                    Mineshaft{" "}
                  </h3>
                </a>
                <div className="flex gap-2">
                  <SiJavascript />
                  <SiMongodb />
                  <SiExpress />
                  <SiReact />
                  <SiNodedotjs />
                  <SiTailwindcss />
                </div>
              </div>
              <div className="flex justify-center mx-4 text-justify md:justify-start md:mx-0">
                <p className="text-sm md:text-base pb-6 max-w-3xl text-gray-100 dark:text-gray-100">
                  Facebook clone using the MERN stack. Allowing users to create
                  an account and login. Users can write and like posts as well
                  as comment.
                </p>
              </div>
              <div className="mx-4 md:mx-0">
                <Image
                  src={mineshaft}
                  width={800}
                  className="rounded-lg shadow-2xl mb-10"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-10">
            <div>
              <div className="flex flex-col justify-center items-center md:flex md:items-center md:justify-start gap-4 mb-6 text-2xl text-gray-100 dark:text-gray-100">
                <a href={weatherUrl} target="_blank" rel="noreferrer">
                  <h3 className="text-3xl pb-2 hover:text-bittersweet text-gray-100 dark:text-delft dark:hover:text-delft">
                    {" "}
                    Weather App{" "}
                  </h3>
                </a>
                <div className="flex gap-2">
                  <SiJavascript />
                  <SiCss3 />
                  <SiHtml5 />
                </div>
              </div>
              <div className="flex justify-center mx-4 text-justify md:justify-start md:mx-0">
                <p className=" text-sm md:text-base pb-6 text-gray-100 dark:text-gray-100">
                  Get hourly, daily and current Weather based on your location
                  using the Open-Meteo API
                </p>
              </div>
              <div className="mx-4 md:mx-0">
                <Image
                  src={weather}
                  width={800}
                  className="rounded-lg shadow-2xl mb-10"
                />
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

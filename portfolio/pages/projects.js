import Image from "next/image";
import Ecoliday from "../public/Ecoliday.png";
import mineshaft from "../public/mineshaft.png";
import weather from "../public/weather.png";
import homepage from "../public/homepage.png";

export default function Projects() {
  const ecolidayUrl = "https://github.com/ghpaterson/Ecoliday";
  const mineshaftUrl = "https://github.com/ghpaterson/acebook-mineshaft";
  const weatherUrl = "https://github.com/ghpaterson/weather-app";
  const recipeaseURL = "https://github.com/ghpaterson/recipease";
  return (
    <>
      <div className="flex justify-center pt-6 mt-10">
        <h3 className="text-5xl py-1 text-gray-700 dark:text-moonstone">
          Projects
        </h3>
      </div>

      <div className="flex justify-center my-6">
        <div>
          <a href={ecolidayUrl} target="_blank" rel="noreferrer">
            <h3 className="text-2xl pb-2 hover:text-bittersweet text-gray-600 dark:text-gray-100 dark:hover:text-yellow-500">
              {" "}
              Ecoliday{" "}
            </h3>
          </a>
          <p className="text-l pb-2 text-gray-600 dark:text-gray-100">
            Users can estimate their carbon emissions of their travel based on
            different modes of transport.
          </p>
          <Image src={Ecoliday} width={800} className="rounded-lg" />
        </div>
      </div>
      <div className="flex justify-center my-10 mb-6">
        <div>
          <a href={recipeaseURL} target="_blank" rel="noreferrer">
            <h3 className="text-2xl pb-2 hover:text-bittersweet text-gray-600 dark:text-gray-100 dark:hover:text-yellow-500">
              {" "}
              Recipeas{" "}
            </h3>
          </a>
          <p className="text-l pb-2 text-gray-600 dark:text-gray-100">
            Food recipe library allowing users to browse by category or search
            for ingredients using the Spoonacular API
          </p>
          <Image src={homepage} width={800} className="rounded-lg" />
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div>
          <a href={mineshaftUrl} target="_blank" rel="noreferrer">
            <h3 className="text-2xl pb-2 hover:text-bittersweet text-gray-600 dark:text-gray-100 dark:hover:text-yellow-500">
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
            <h3 className="text-2xl pb-2 hover:text-bittersweet text-gray-600 dark:text-gray-100 dark:hover:text-yellow-500">
              {" "}
              Weather App{" "}
            </h3>
          </a>
          <p className="text-l pb-2 text-gray-600 dark:text-gray-100">
            Weather based on your current location using the Open-Meteo API
          </p>
          <Image src={weather} width={800} className="rounded-lg" />
        </div>
      </div>
    </>
  );
}

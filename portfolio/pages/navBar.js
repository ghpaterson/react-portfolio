import React, { useState, useEffect } from "react";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const githubURL = "https://github.com/ghpaterson";
  const linkedinURL = "https://www.linkedin.com/in/graeme-paterson-25b096268/";

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      className={`static py-10 mb-4 mx-2 flex justify-center md:justify-end md:items-center md:mr-20 md:gap-10 ${
        darkMode ? "dark" : ""
      }`}
    >
      <ul className="flex gap-0">
        <li>
          <a
            className={`font-inconstant font-bold text-darkpurple  ${
              darkMode ? "dark:text-lightpurple" : ""
            } px-2 py-1 border-none rounded-md ml-2 mr-2`}
            href="/"
            target=""
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className={`font-inconstant font-bold text-darkpurple  ${
              darkMode ? "dark:text-lightpurple" : ""
            } px-2 py-2 border-none rounded-md ml-1 mr-1`}
            href="/about"
            target=""
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            className={`font-inconstant font-bold text-darkpurple ${
              darkMode ? "dark:text-lightpurple" : ""
            } px-2 py-2 border-none rounded-md ml-1 mr-1`}
            href="/projects"
            target=""
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            className={`font-inconstant font-bold text-darkpurple  ${
              darkMode ? "dark:text-lightpurple" : ""
            } px-4 py-2 border-none rounded-md ml-1 mr-1`}
            href="/graeme-cv.pdf"
            target="_blank"
          >
            CV
          </a>
        </li>
        <div className="hidden md:flex gap-8 items-center px-6 md:ml-24">
          <li>
            <a href={linkedinURL} target="_blank">
              <BsLinkedin className="cursor-pointer text-xl text-darkpurple" />
            </a>
          </li>
          <li>
            <a href={githubURL} target="_blank">
              <BsGithub className="cursor-pointer text-xl text-darkpurple" />
            </a>
          </li>
        </div>
        {/* <li>
          {darkMode ? (
            <BsFillSunFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl ml-4  dark:text-lightpurple dark:hover:text-yellow-500 md:ml-32 md:mr-4"
            />
          ) : (
            <BsFillMoonFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl ml-4 text-darkpurple hover:text-lightpurple dark:text-yellow-500 md:ml-32 md:mr-4"
            />
          )}
        </li> */}
      </ul>
    </nav>
  );
}

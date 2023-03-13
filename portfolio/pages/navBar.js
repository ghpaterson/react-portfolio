import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

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
      className={`static py-10 mb-4 flex justify-center md:justify-end md:mr-8 ${
        darkMode ? "dark" : ""
      }`}
    >
      <ul className="flex gap-0">
        <li>
          <a
            className={`font-titillium text-gray-100 hover:text-bittersweet ${
              darkMode ? "dark:text-gray-100 dark:hover:text-delft" : ""
            } px-2 py-1 border-none rounded-md ml-2 mr-2`}
            href="/"
            target=""
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className={`font-titillium text-gray-100 hover:text-bittersweet ${
              darkMode ? "dark:text-gray-100 dark:hover:text-delft" : ""
            } px-2 py-2 border-none rounded-md ml-1 mr-1`}
            href="/about"
            target=""
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            className={` font-titillium text-gray-100 hover:text-bittersweet ${
              darkMode ? "dark:text-gray-100 dark:hover:text-delft" : ""
            } px-2 py-2 border-none rounded-md ml-1 mr-1`}
            href="/projects"
            target=""
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            className={` font-titillium text-gray-100 hover:text-bittersweet ${
              darkMode ? "dark:text-gray-100 dark:hover:text-delft" : ""
            } px-4 py-2 border-none rounded-md ml-1 mr-1`}
            href="/graeme-cv.pdf"
            target="_blank"
          >
            CV
          </a>
        </li>
        <li>
          {darkMode ? (
            <BsFillMoonFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl ml-4 text-gray-100 hover:text-yellow-500 dark:text-gray-100 dark:hover:text-delft md:ml-32 md:mr-4"
            />
          ) : (
            <BsFillSunFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl ml-4 text-gray-100 hover:text-yellow-500 dark:text-yellow-500 md:ml-32 md:mr-4"
            />
          )}
        </li>
      </ul>
    </nav>
  );
}

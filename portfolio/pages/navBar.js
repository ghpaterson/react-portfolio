import React from "react";
import { BsFillMoonFill } from "react-icons/bs";

export default function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`static py-10 mb-4 flex justify-end ${darkMode ? "dark" : ""}`}
    >
      <ul className="flex gap-0">
        <li>
          <a
            className={`text-gray-800 ${
              darkMode ? "dark:text-gray-100 dark:hover:text-yellow-500" : ""
            } px-4 py-1 border-none rounded-md ml-2 mr-2`}
            href="/"
            target=""
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className={`text-gray-800 ${
              darkMode ? "dark:text-gray-100 dark:hover:text-yellow-500" : ""
            } px-4 py-2 border-none rounded-md ml-1 mr-1`}
            href="/about"
            target=""
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            className={`text-gray-800 ${
              darkMode ? "dark:text-gray-100 dark:hover:text-yellow-500" : ""
            } px-4 py-2 border-none rounded-md ml-1 mr-1`}
            href="/projects"
            target=""
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            className={`text-gray-800 ${
              darkMode ? "dark:text-gray-100 dark:hover:text-yellow-500" : ""
            } px-4 py-2 border-none rounded-md ml-1 mr-1`}
            href="/graeme-cv.pdf"
            target="_blank"
          >
            RESUME
          </a>
        </li>
        <li>
          <BsFillMoonFill
            onClick={() => setDarkMode(!darkMode)}
            className={`cursor-pointer text-2xl ml-2 hover:animate-pulse ${
              darkMode
                ? "text-gray-700 dark:text-yellow-500"
                : "text-gray-700 dark:text-yellow-500"
            }`}
          />
        </li>
      </ul>
    </nav>
  );
}

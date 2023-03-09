import React from "react";
import { BsFillMoonFill } from "react-icons/bs";

export default function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`static py-10 mb-8 flex justify-end ${darkMode ? "dark" : ""}`}
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
            Home
          </a>
        </li>
        <li>
          <a
            className={`text-gray-800 ${
              darkMode ? "dark:text-gray-100 dark:hover:text-yellow-500" : ""
            } px-4 py-2 border-none rounded-md ml-2 mr-2`}
            href="/about"
            target=""
          >
            About
          </a>
        </li>
        <li>
          <a
            className={`text-gray-800 ${
              darkMode ? "dark:text-gray-100 dark:hover:text-yellow-500" : ""
            } px-4 py-2 border-none rounded-md ml-2 mr-2`}
            href="/projects"
            target=""
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={`text-gray-800 ${
              darkMode ? "dark:text-gray-100 dark:hover:text-yellow-500" : ""
            } px-4 py-2 border-none rounded-md ml-2 mr-2`}
            href="/graeme-paterson-cv.pdf"
            target=""
          >
            Resume
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

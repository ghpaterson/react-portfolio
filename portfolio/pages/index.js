import Head from "next/head";

import Footer from "./footer";
import Body from "./body";
import NavBar from "./navBar";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Graeme Paterson</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-gradient-to-tr from-yellow-50 via-yellow-100 to-yellow-200 dark:bg-gradient-to-tr dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 px-10 md:px-20 lg:px-30">
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Body />
          <Footer />
        </main>
      </div>
    </>
  );
}

import Head from "next/head";
import Footer from "./footer";
import Body from "./body";
import NavBar from "./navBar";

export default function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Graeme Paterson</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=" dark:bg-gray-100 dark:bg-no-repeat dark:bg-cover dark:bg-fixed">
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Body />
          <Footer />
        </main>
      </div>
    </>
  );
}

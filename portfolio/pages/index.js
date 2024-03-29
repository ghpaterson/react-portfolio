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
          <meta name="description" content="Graeme Paterson's Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/light/lighthero.png" />
        </Head>
        <main>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Body />
          <Footer />
        </main>
      </div>
    </>
  );
}

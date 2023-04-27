import Footer from "./footer";
import NavBar from "./navBar";
import Image from "next/image";
import Head from "next/head";
import Ecoliday from "../public/Ecoliday.png";
import decode from "../public/decode-screen.png";
import headless from "../public/headless-screen.png";
import bloggyscreen from "../public/bloggyscreen.png";
import messylavender from "../public/light/Messylavender.png";
import projects from "../public/light/Projects.png";

import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiFirebase,
  SiFigma,
  SiGraphql,
} from "react-icons/si";

export default function Projects({ darkMode, setDarkMode }) {
  const ecolidayUrl = "https://ecoliday-cxyz.onrender.com/";
  const bloggyUrl = "https://github.com/ghpaterson/bloggy";
  const decodeURL = "https://decode-care.vercel.app/";
  const headlessURL = "https://github.com/ghpaterson/headlessblog";
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Graeme Paterson</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-teagreen ">
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <section className="h-96 mb-32 md:mb-44 lg:mb-66">
            <div className="mx-24">
              <div className="min-w-screen h-96 flex flex-col items-center mt-20 rounded-xl md:flex-row md:gap-6  md:ml-32 md:mt-24">
                <div className="text-center p-1">
                  <div className="flex justify-center">
                    <Image src={projects} width={240} />
                  </div>
                  <h3 className="text-2xl py-2 text-darkpurple md:text-3xl "></h3>
                  <p className=" font-inconstant text-md py-5 leading-8 text-darkpurple md:text-xl max-w-md mx-auto ">
                    Welcome to my projects page! Here you'll find a collection
                    of my latest work, showcasing my skills in Software
                    Development, design, and more.
                  </p>
                </div>
                <div className="mb-10 md:mt-10">
                  <Image src={messylavender} width={500} />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-darkpurple py-6">
            <div className="bg-transparent flex justify-center mx-5 lg:mx-32">
              <div>
                <div className="flex flex-col justify-center mb-4 items-center md:flex md:items-center md:justify-start text-3xl text-bone  ">
                  <a href={ecolidayUrl} target="_blank" rel="noreferrer">
                    <h3 className=" font-inconstant font-extrabold text-3xl pb-4 mr-4 text-bone ">
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
                  <p className="font-inconstant text-sm pb-6 max-w-3xl text-bone  md:text-base">
                    Ecoliday has been developed to enable people to make a more
                    environmentally informed decision when planning a holiday.
                    It provides users with estimated CO2e emissions for
                    different destinations and vehicle types as well as
                    suggesting local alternatives
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
          </section>
          <section className="bg-bone py-6">
            <div className="bg-transparent flex justify-center mx-5 lg:mx-32">
              <div>
                <div className="flex flex-col justify-center items-center md:flex md:items-center md:justify-start gap-4 mb-6 text-2xl ">
                  <a href={bloggyUrl} target="_blank" rel="noreferrer">
                    <h3 className=" font-inconstant font-extrabold text-3xl pb-2 mr-4  text-darkpurple ">
                      {" "}
                      Mister Bloggy{" "}
                    </h3>
                  </a>
                  <div className="flex gap-2 text-darkpurple">
                    <SiJavascript />
                    <SiNextdotjs />
                    <SiReact />
                    <SiFirebase />
                    <SiTailwindcss />
                    <SiFigma />
                  </div>
                </div>
                <div className="flex justify-center mx-4 text-justify md:justify-start md:mx-0">
                  <p className="font-inconstant text-sm md:text-base pb-6 max-w-3xl text-darkpurple ">
                    This project is a blog web app designed for music, food, and
                    design enthusiasts to share their latest findings with
                    friends. The app uses Google authentication for user login
                    and allows users to share posts, comment on posts, delete
                    and edit their own posts. Built with the Next 13 framework
                    and Firebase database.
                  </p>
                </div>
                <div className="mx-4 md:mx-0">
                  <Image
                    src={bloggyscreen}
                    width={800}
                    className="rounded-lg shadow-2xl mb-10"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-darkpurple py-6">
            <div className="bg-transparent  flex justify-center mx-5 lg:mx-32">
              <div>
                <div className="flex flex-col justify-center items-center md:flex md:items-center md:justify-start gap-4 mb-6 text-2xl text-bone  ">
                  <a href={decodeURL} target="_blank" rel="noreferrer">
                    <h3 className=" font-inconstant font-extrabold text-3xl pb-2 mr-4 text-bone ">
                      {" "}
                      Decode Care{" "}
                    </h3>
                  </a>
                  <div className="flex gap-2">
                    <SiJavascript />
                    <SiReact />
                    <SiTailwindcss />
                    <SiNextdotjs />
                  </div>
                </div>
                <div className="flex justify-center mx-4 text-justify md:justify-start md:mx-0">
                  <p className="font-inconstant text-sm md:text-base pb-6 max-w-3xl text-bone ">
                    Introducing a new web app that can help young children and
                    people with reading difficulties to improve their reading
                    skills. This app is designed to offer an ever-growing
                    collection of reading exercises that utilize engaging and
                    research-backed techniques to aid in improving reading
                    abilities. Built with next.js and deployed on vercel, the
                    app boasts reliability, speed, and user-friendliness. As it
                    is continuously updated with new exercises, the app
                    guarantees an exciting and engaging experience for its users
                  </p>
                </div>
                <div className="mx-4 md:mx-0">
                  <Image
                    src={decode}
                    width={800}
                    className="rounded-lg shadow-2xl mb-10"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-bone">
            <div className=" bg-transparent px-4 py-6 flex justify-center mx-5 lg:mx-32">
              <div className="">
                <div className="flex flex-col justify-center items-center md:flex md:items-center md:justify-start gap-4 mb-6 text-2xl text-darkpurple ">
                  <a href={headlessURL} target="_blank" rel="noreferrer">
                    <h3 className=" font-inconstant font-extrabold text-3xl pb-2 text-darkpurple ">
                      {" "}
                      Headless{" "}
                    </h3>
                  </a>
                  <div className="flex gap-2">
                    <SiJavascript />
                    <SiNextdotjs />
                    <SiTailwindcss />
                    <SiReact />
                    <SiGraphql />
                  </div>
                </div>
                <div className="flex justify-center mx-4 text-justify md:justify-start md:mx-0">
                  <p className="font-inconstant text-sm md:text-base pb-6 max-w-3xl text-darkpurple ">
                    I am passionate about web design, software development, and
                    technology so I created a personal blog called Headless. The
                    name took inspiration from my discovery and implementation
                    of Headless CMS. Headless, a new web blog is designed to
                    keep you up-to-date with my latest learning and insights in
                    these fields.As a blog that's built using Next 13, Hygraph
                    and GraphQl, Headless is the perfect platform for me to
                    share my knowledge and insights with others who share my
                    interests.
                  </p>
                </div>
                <div className="mx-4 md:mx-0">
                  <Image
                    src={headless}
                    width={800}
                    className="rounded-lg shadow-2xl mb-10"
                  />
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}

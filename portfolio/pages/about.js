import Head from "next/head";
import NavBar from "./navBar";
import Footer from "./footer";
import Image from "next/image";
import avatar from "../public/avatar.png";
import { FaAmbulance } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { BiFontFamily } from "react-icons/bi";
import { GoPaintcan } from "react-icons/go";
import coffeelight from "../public/light/Coffeelight.png";

export default function About({ darkMode, setDarkMode }) {
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Graeme Paterson</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="dark:bg-darkpurple dark:bg-no-repeat dark:bg-cover dark:bg-fixed">
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <section className="h-96 mb-32 md:mb-24 lg:mb-60">
            <div className="mx-24">
              <div className="min-w-screen h-96 flex flex-col items-center mt-20 rounded-xl dark:bg-transparent md:flex-row md:gap-4 md:ml-32 md:mt-24">
                <div className="text-center p-1">
                  <h2 className="font-inconstant  text-4xl py-2 text-darkpurple font-extrabold md:text-5xl  dark:text-lightpurple">
                    About
                  </h2>
                  <h3 className="text-2xl py-2 text-darkpurple md:text-3xl dark:text-gray-100"></h3>
                  <p className=" font-inconstant text-md py-5 leading-8 text-darkpurple md:text-xl max-w-md mx-auto dark:text-gray-100">
                    I'm a Junior FullStack Software Developer and Makers Academy
                    Graduate. Scroll down to find out a bit more about me.
                  </p>
                </div>
                <div className="ml-6">
                  <Image src={coffeelight} width={500} />
                </div>
              </div>
            </div>
          </section>
          <section className=" mb-80 lg:mb-40">
            <div className="flex justify-center lg:flex lg:justify-start lg:mx-64">
              <div className="h-72 w-96">
                <p1 className="font-inconstant text-xl text-darkpurple dark:text-gray-100">
                  <MdComputer className="text-5xl  my-5" />
                  I’m motivated to work in tech for its potential power to drive
                  positive change in our world. I love how it is constantly
                  evolving and offering endless opportunities for learning and
                  growth. In today's world technology plays a crucial role in
                  shaping the future, and I'm excited to be a part of it.
                </p1>
              </div>
            </div>
            <div className="flex justify-center lg:flex lg:justify-end lg:mx-64">
              <div className="h-80 w-96">
                <p2 className="font-inconstant text-xl text-darkpurple dark:text-gray-100">
                  <GoPaintcan className="text-5xl my-5" />
                  I'm always striving to level up my design game, especially
                  when it comes to UI/UX. My goal is to create designs that not
                  only look great but are also super user-friendly. To achieve
                  this, I'm committed to constatly learning and experimenting
                  with design techniques. I'm also excited to collaborate with
                  designers to bring out-of-the-box ideas to life.
                </p2>
              </div>
            </div>
            <div className="flex justify-center lg:flex lg:justify-start lg:mx-64">
              <div className="h-72 w-96">
                <p3 className="font-inconstant text-xl text-darkpurple dark:text-gray-100">
                  <FaAmbulance className="text-5xl my-5" />I have ten years
                  experience working with patients in public healthcare systems
                  I have a passion for providing better services to society and
                  ensuring that everyone from our communities have equal access
                  to things that make their lives healthier and more fulfilling.
                </p3>
              </div>
            </div>
            <div className="flex justify-center lg:flex lg:justify-end lg:mx-64">
              <div className="h-72 w-96">
                <p4 className="font-inconstant text-xl text-darkpurple dark:text-gray-100">
                  <BiFontFamily className="text-5xl my-5" />
                  The typeface used on this website is called "Inconstant
                  Regular" It was created by Dyslexia Scotland in collaboration
                  with designer Daniel Brokstad to be friendly to both dyslexia
                  and designers alike.
                </p4>
              </div>
            </div>

            {/* <div className="bg-transparent rounded-full h-72 w-72 overflow-hidden  dark:bg-transparent hidden md:block">
                <div className="">
                  <Image src={avatar} objectFit="cover" />
                </div>
              </div> */}
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}

import Head from "next/head";
import {BsFillMoonFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import Ecoliday from '../public/Ecoliday.png'
import {useState} from 'react'

export default function Home() {
  const[darkMode, setDarkMode] = useState(false);
  const githubCVUrl = "https://github.com/ghpaterson/CV"
  const gitHubUrl = "https://github.com/ghpaterson"
  const linkedInUrl = "https://www.linkedin.com/in/graeme-paterson-25b096268/"
  
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Graeme Paterson</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 px-10 md:px-20 lg:px-30 dark:bg-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl ml-5 dark:text-gray-100">Developed by Graeme</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl hover:animate-pulse text-gray-700 dark:text-yellow-500"/>
              </li>
              <li>
                <a className="bg-yellow-500 text-gray-100 px-4 py-2 border-none rounded-md ml-8 mr-5" href={githubCVUrl} target="_blank">Github CV</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-yellow-500 font-medium md:text-6xl">Graeme Paterson</h2>
            <h3 className="text-2xl py-2 text-gray-700 md:text-3xl dark:text-gray-100">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-lg mx-auto dark:text-gray-100">
              Junior Software developer focusing on Frontend. Interested UI/UX
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 cursor-pointer dark:text-gray-100">
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
            <AiFillLinkedin />
            </a>
            <a href={gitHubUrl} target="_blank" rel="noreferrer">
            <AiFillGithub />
            </a>
          </div>
          {/* <div>Image will go here</div>  */}
        </section>

        <section>
          <div className="pl-60">
            <h3 className="text-3xl py-1 text-gray-700 dark:text-gray-100">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-gray-100">
              Here are screen shots of some of the projects I am proud of...
            </p>
            <p className="text-md py-2 leading-8 text-gray-600 md:text-xl max-w-lg dark:text-gray-100">
              Here is some more text that I ma going to waffle on about myself if I need to 
              because I have to get used to talking about myself.
            </p>
          </div>

          <div className="flex justify-center my-10">
            <div>
            <h3 className="text-xl pb-2 text-gray-600 dark:text-gray-100"> Ecoliday </h3>
             <p className="text-l pb-2 text-gray-600 dark:text-gray-100">
              Carbon Emissions estimate based on modes of transportation
            </p>
             <Image src={Ecoliday} width={800} className="rounded-lg" />
             </div>
          </div>
          <div className="flex justify-center my-10">
            <div>
            <h3 className="text-xl pb-2 text-gray-600 dark:text-gray-100"> Ecoliday </h3>
             <p className="text-l pb-2 text-gray-600 dark:text-gray-100">
              Carbon Emissions estimate based on modes of transportation
            </p>
             <Image src={Ecoliday} width={800} className="rounded-lg" />
             </div>
          </div>
          <div className="flex justify-center my-10">
            <div>
            <h3 className="text-xl pb-2 text-gray-600 dark:text-gray-100"> Ecoliday </h3>
             <p className="text-l pb-2 text-gray-600 dark:text-gray-100">
              Carbon Emissions estimate based on modes of transportation
            </p>
             <Image src={Ecoliday} width={800} className="rounded-lg" />
             </div>
          </div>
        </section>
        <section>
          <div>

          </div>
        </section>
      </main>
      </div>  
    </>
  );
}

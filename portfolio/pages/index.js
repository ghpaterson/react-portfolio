import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import Emissions from '../public/Emissions.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Graeme Paterson</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl ml-5">Developed by Graeme</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className="bg-yellow-500 text-white px-4 py-2 border-none rounded-md ml-8 mr-5" href="#">Github</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-yellow-500 font-medium">Graeme Paterson</h2>
            <h3 className="text-2xl py-2 text-gray-700">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-700">
              Junior Software developer focusing on Frontend. Interested UI/UX
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          {/* <div>Image will go here</div>  */}
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-600">
              Here are screen shots of some of the projects I am proud of...
            </p>
            <p className="text-md py-2 leading-8 text-gray-600">
              Here is some more text that I ma going to waffle on about myself if I need to 
              because I have to get used to talking about myself.
            </p>
          </div>

          <div className="flex justify-center">
            <div>
            <h3> Ecoliday </h3>
             <p>
              Carbon Emissions estimate based on modes of transportation
            </p>
             <Image src={Emissions} width={800}  />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

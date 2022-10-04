import Head from 'next/head'
import Link from 'next/link'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/image";
import dd from "../public/web-dd2.png";
import skills from "../public/112-installing.png"
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark":""}>
      <Head>
        <title>Davide Di Serio Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 ld:px-40 dark:bg-grey-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <div>
              <Image src={dd} alt="personal logo" width={50} height={50}/>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)} 
                className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className=" bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Davide Di Serio</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Graduating student in Computer Engineering</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
            Developer in Java, Spring Boot and I also made website for fun. If you want to assume me download my resume.
            Enjoy it!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <Link href="https://github.com/ddiseri0">
              <a><AiFillGithub/></a>
            </Link>
            <Link href="https://www.linkedin.com/in/davide-di-serio-3920151a2/">
              <a><AiFillLinkedin/></a>
            </Link>
          </div>       
        </section>

        <section>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={skills} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                HARD SKILLS
              </h3>
              <p className="py-2">
              computer science is my passion. 
              I have independently learned a lot about computer science and the possibilities that modern frameworks and programming languages offer, and through college I have refined some of these.
              </p>
              <h4 className="py-4 text-teal-600">Programming language that I use</h4>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Spring Framework</p>
              <p className="text-gray-800 py-1">HTML and CSS</p>
              <p className="text-gray-800 py-1">SQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={skills} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                SOFT SKILLS
              </h3>
              <p className="py-2">
              During my time at university through some group projects I was able to further develop my communication and collaboration skills within a team. 
              I consider myself to be project management inclined and have a strong aptitude for growth and constant improvement.
              </p>
              <p className="text-teal-600 py-1">Team-Working</p>
              <p className="text-teal-600 py-1">Comunication</p>
              <p className="text-teal-600 py-1">Collaboration</p>
              <p className="text-teal-600 py-1">Proactivity</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1">
              Projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800">
            Thanks to university projects I got to study more deeply how to develop softwares with a microservices structure. Mainly using Spring Boot Framework, MySql as database and Java as backend programming language, I had also made full stack software independently with React Framework for the frontend.
            </p>
          </div>
        </section>

      </main>
    </div>
  )
}

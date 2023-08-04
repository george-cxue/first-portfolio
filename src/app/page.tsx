"use client"
import React, {useState} from 'react';
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import Picture from "/public/headshot.jpeg"; // ask how this pathing works again
import Camera from '/public/camera.jpeg';
import Mai from '/public/mai.jpeg';

function Landing() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <Head>
        <title>George Xue Portfolio</title>
        <meta name="description" content="generated by george" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-30">
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className="text-xl" >GX.</h1>
            <ul className="flex items-center" >
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' /></li>
              <li><a className="bg-gray-800 text-white px-4 py-2 rounded-2xl ml-8" href="https://docs.google.com/document/d/11_oFNUKHedcwdC_p6510NwOGYdosZA8HRF_e01UctXk/edit?usp=sharing">Resume</a></li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-gray-800 font-medium md:text-6xl">George Xue</h2>
            <h3 className="text-2xl py-2 md:text-3xl" >Computer Science + Entreprenuership</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto">Currently a sophomore attending the University of Pennsylvania in pursuit of an engineering degree in computer science with minors in statistics and engineering entreprenuership</p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600" >
            <AiFillTwitterCircle />
            <AiFillLinkedin href="https://www.linkedin.com/in/george-xue/" />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={Picture} alt="profile" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl pt-16 pb-1" >About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800" >test test test <span className="font-bold">bold</span></p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={Camera} alt="camera" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Camera</h3>
              <p className="py-2">This is a placeholder.</p>
              <h4 className="py-4 text-yellow-300">Tools I used</h4>
              <p className="text-gray-800 py-1">tool #1</p>
              <p className="text-gray-800 py-1">tool #2</p>
              <p className="text-gray-800 py-1">tool #3</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={Mai} alt="mai" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Mai</h3>
              <p className="py-2">This is a placeholder.</p>
              <h4 className="py-4 text-yellow-300">Tools I used</h4>
              <p className="text-gray-800 py-1">tool #1</p>
              <p className="text-gray-800 py-1">tool #2</p>
              <p className="text-gray-800 py-1">tool #3</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p> more info section </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;

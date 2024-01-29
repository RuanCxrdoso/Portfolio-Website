"use client";
import React from "react";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

export function HeroSection() {
  return(
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A900] via-[#F28900] to-[#F25900]">
              Hello, I&apos;m{" "}
            </span> 
            <br />
            <TypeAnimation
              sequence={[
                'Ruan',
                2000,
                'Front-End Developer',
                1500,
                'Computer Engineering Student',
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa ipsa aliquid officia iure, esse cum qui impedit aut explicabo tempora?
          </p>
          <div>
            <button className="transition-colors duration-300 px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#F2A900] via-[#F28900] to-[#F25900] text-black hover:text-[#181818] font-bold">
              Hire me !
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#F2A900] via-[#F28900] to-[#F25900] hover:bg-[#424242] text-white mt-3">
              <span className="transition-colors duration-300 block bg-[#121212] hover:bg-[#424242] rounded-full px-5 py-2">Download my CV :)</span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image 
              src="/assets/perfil-bg.png" 
              alt="Hero Image" 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300} 
              height={300} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

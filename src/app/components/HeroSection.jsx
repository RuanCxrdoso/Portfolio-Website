"use client";
import React from "react";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'
import { motion, useInView } from "framer-motion"
import { useRef } from "react";

const heroTextVariants = {
  "onScreen": { opacity: 1, translateX: 0 },
  "offScreen": {  opacity: 0, translateX: -70 }
}

const heroAvatarVariants = {
  "onScreen": { opacity: 1, translateX: 0 },
  "offScreen": {  opacity: 0, translateX: 70 }
}

export function HeroSection() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const inView1 = useInView(ref1, { once: false })
  const inView2 = useInView(ref2, { once: false })

  return(
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          ref={ref1}
          initial="offScreen" 
          animate={ inView1 ? "onScreen" : "offScreen" } 
          transition={{ duration: 2 }}
          variants={heroTextVariants}
          className="col-span-8 place-self-center text-center sm:text-left mr-4"
        >
          <h1 className="text-white h-40 sm:h-44 lg:h-56 xl:h-auto mb-4 text-4xl sm:text-5xl lg:text-6xl leading-normal font-extrabold">
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
          <p className="text-[#ADB7BE] text-base mt-12 sm:mt-0 sm:text-lg mb-6 lg:text-xl">
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
        </motion.div>
        <motion.div
          ref={ref2}
          initial="offScreen" 
          animate={ inView2 ? "onScreen" : "offScreen" } 
          transition={{ duration: 2 }}
          variants={heroAvatarVariants}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full overflow-hidden bg-[#181818] mt-8 sm:mt-0 w-[250px] h-[250px] lg:w-[370px] lg:h-[370px] xl:w-[400px] xl:h-[400px] relative">
            <Image 
              src="/assets/perfil-cartoon.png" 
              alt="Hero Image" 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={450} 
              height={450} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

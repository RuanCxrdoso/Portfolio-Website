"use client"

import React from "react"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import myCV from '../../../public/ruanCV.zip'
import { useTranslations } from "next-intl"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"

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

  const txt = useTranslations('HeroSection')

  return(
    <section className="lg:py-16" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          ref={ref1}
          initial="offScreen" 
          animate={ inView1 ? "onScreen" : "offScreen" } 
          transition={{ duration: 2 }}
          variants={heroTextVariants}
          className="col-span-8 place-self-center text-center sm:text-left mr-4"
        >
          <h1 className="text-white h-44 sm:h-48 lg:h-60 xl:h-56 mb-4 text-4xl sm:text-5xl lg:text-6xl leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A900] via-[#F28900] to-[#F25900]">
              {txt('typeAnimation.title')} {" "}
            </span> 
            <br />
            <TypeAnimation
              sequence={[
                'Ruan',
                1500,
                txt('typeAnimation.role'),
                2000,
                txt('typeAnimation.course'),
                2000,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mt-12 sm:mt-0 sm:text-lg mb-6 lg:text-xl">
            {txt('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
            <div>
              <a
                href="https://www.linkedin.com/in/ruancardosolinkdin/" target="_blank" 
                className="block py-3 px-5 font-bold rounded-full bg-gradient-to-br from-[#F2A900] via-[#F28900] to-[#F25900] text-black hover:text-[#181818] transition-colors duration-300 animate-bounce"
              >
                {txt('hireButton')}
              </a>
            </div>
            <div>
              <a download={true} href={myCV} className="py-1 w-full sm:w-fit mt-3">
                <div className="flex justify-center items-center gap-2 transition-colors duration-300 text-[#ADB7BE] bg-[#121212] hover:bg-[#424242] rounded-full px-5 py-3">
                    {txt('cvButton')}
                    <ArrowDownTrayIcon className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial="offScreen" 
          animate={ inView2 ? "onScreen" : "offScreen" } 
          transition={{ duration: 2 }}
          variants={heroAvatarVariants}
          className="col-span-4 place-self-center md:place-self-end mt-4 lg:mt-0"
        >
          <div className="rounded-full overflow-hidden bg-[#181818] mt-8 sm:mt-0 w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px] relative">
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

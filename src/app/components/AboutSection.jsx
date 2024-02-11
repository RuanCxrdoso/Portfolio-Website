"use client"
import Image from "next/image"
import html5  from '../../../public/assets/skills/html5-color.svg'
import css3   from '../../../public/assets/skills/css3-color.svg'
import javascript   from '../../../public/assets/skills/javascript-color.svg'
import typescript   from '../../../public/assets/skills/typescript-color.svg'
import reactJs   from '../../../public/assets/skills/react-color.svg'
import nextJs  from '../../../public/assets/skills/nextdotjs-color.svg'
import vite   from '../../../public/assets/skills/vite-color.svg'
import tailwind   from '../../../public/assets/skills/tailwindcss-color.svg'
import styledComponents   from '../../../public/assets/skills/styledcomponents-color.svg'
import bootstrap   from '../../../public/assets/skills/bootstrap-color.svg'
import git   from '../../../public/assets/skills/git-color.svg'
import github   from '../../../public/assets/skills/github-color.svg'
import { useState, useTransition, useRef } from "react"
import { TabButton } from "./TabButton"
import { motion, useInView } from "framer-motion"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap sm:justify-center gap-6 mt-8">
        <Image src={html5} alt="" height={60} width={60} />
        <Image src={css3} alt="" height={60} width={60} />
        <Image src={javascript} alt="" height={60} width={60} />
        <Image src={typescript} alt="" height={60} width={60} />
        <Image src={reactJs} alt="" height={60} width={60} />
        <Image src={nextJs} alt="" height={60} width={60} />
        <Image src={vite} alt="" height={60} width={60} />
        <Image src={tailwind} alt="" height={60} width={60} />
        <Image src={styledComponents} alt="" height={60} width={60} />
        <Image src={bootstrap} alt="" height={60} width={60} />
        <Image src={git} alt="" height={60} width={60} />
        <Image src={github} alt="" height={60} width={60} />
      </div>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 ml-0 mt-4 text-lg">
        <li className="pt-2">Computer Engineering Bachelor - Federal University of Bahia (2021 ~ 2027)</li>
        <li className="pt-2">FullStack JavaScript Developer - OneBitCode (Coursing)</li>
        <li className="pt-2">React.js - Rocketseat (Coursing)</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 ml-0 mt-4 text-lg">
        <li className="pt-2">Front-End Developer - TITAN Smart Computing (sep, 2023 ~ present)</li>
      </ul>
    )
  },
]

const variantsImage = {
  inScreen: { opacity: 1, translateX: 0 },
  offScreen: { opacity: 0, translateX: -50  },
}

const variantsContent = {
  inScreen: { opacity: 1, translateX: 0 },
  offScreen: { opacity: 0, translateX: 50  },
}

export function AboutSection() {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: false })
  const isInView2 = useInView(ref2, { once: false })

  function handleTabChange(id) {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white mt-10 sm:mt-14 relative">

      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F2A900] to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-44 -right-3/4 sm:-right-0 md:-right-44 transform translate-x-0 translate-y-1/2"></div>

      <div  className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          ref={ref1}
          initial="offScreen"
          animate={ isInView1 ? "inScreen" : "offScreen" }
          transition={{ duration: 1.5 }}
          variants={variantsImage}
          className="z-10"
        >
          <Image src={'/assets/about-image-2.png'} alt="" height={450} width={450} className="rounded-full"/>
        </motion.div>
        <motion.div 
          ref={ref2}
          initial="offScrenn"
          animate={ isInView2 ? "onScreen" : "offScreen" }
          transition={{ duration: 1.5 }}
          variants={variantsContent}
          className="mt-6 md:mt-0 text-left flex flex-col h-full z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A900] via-[#F28900] to-[#F25900]">About me</span>
          </h2>
          <p className="text-base md:text-lg text-[#ADB7BE]">I am a technology enthusiast, a 22 year old young man who brings with him a passion for innovation and
          through the world of software and hardware development. I am determined to pursue a career
          in this dynamic field, driven by an insatiable curiosity and a desire to learn
          continuous.</p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
          </div>
          <div className="mt-0 mb-8 z-10 text-[#ADB7BE]">
            {TAB_DATA.find((navSelected) => navSelected.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
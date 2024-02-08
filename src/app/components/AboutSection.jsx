"use client"
import Image from "next/image"
import { useState, useTransition, useRef } from "react"
import { TabButton } from "./TabButton"
import { motion, useInView } from "framer-motion"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ml-3 mt-4">
        <li className="pt-1">HTML</li>
        <li className="pt-1">CSS</li>
        <li className="pt-1">JavaScript/TypeScript</li>
        <li className="pt-1">React.js</li>
        <li className="pt-1">Next.js</li>
        <li className="pt-1">Vite.js</li>
        <li className="pt-1">TailwindCSS</li>
        <li className="pt-1">Bootstrap</li>
        <li className="pt-1">Git/Github</li>
        <li className="pt-1">Scrum</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 ml-0 mt-4">
        <li className="pt-2">Computer Engineering Bachelor - Universidade Federal da Bahia (2021 ~ 2027)</li>
        <li className="pt-2">Programador FullStack JavaScript - OneBitCode (Coursing)</li>
        <li className="pt-2">React.js - Rocketseat (Coursing)</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 ml-3 mt-4">
        <li className="pt-1">Front-End Developer - TITAN Computação Inteligente (sep, 2023 ~ this moment)</li>
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
          <p className="text-base md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum officiis doloremque quasi non dicta omnis laboriosam dolores fugit cupiditate assumenda! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo nesciunt tempore veniam vel mollitia excepturi reiciendis, vitae laudantium sunt modi!</p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
          </div>
          <div className="mt-0 z-10">
            {TAB_DATA.find((navSelected) => navSelected.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
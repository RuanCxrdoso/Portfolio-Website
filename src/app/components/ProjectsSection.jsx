"use client"

import { useState, useRef } from "react"
import { ProjectCard } from "./ProjectCard"
import { ProjectTag } from "./ProjectTag"
import { motion, useInView } from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "NLW - Shorts Summary",
    description: "Make shorts summary with IA",
    gitUrl: "https://github.com/RuanCxrdoso/NLW-IA",
    previewUrl: "https://nlw-summary-ia.vercel.app",
    image: "/assets/projects/nlwIA.png",
    tag: ["All", "Vanilla Js"],
  },
  {
    id: 2,
    title: "Ignite Timer",
    description: "Pomodoro Timer with timers register",
    gitUrl: "https://github.com/RuanCxrdoso/Ignite-Timer",
    previewUrl: "",
    image: "/assets/projects/igniteTimer.png",
    tag: ["All", "React"],
  },
  {
    id: 3,
    title: "Ignite Feed",
    description: "Notice Feed with comments",
    gitUrl: "https://github.com/RuanCxrdoso/Ignite-Feed",
    previewUrl: "https://ignite-social-feed.vercel.app",
    image: "/assets/projects/igniteFeed.png",
    tag: ["All", "React"],
  },
  {
    id: 4,
    title: "NLW - Expert Notes",
    description: "Make notes with audio or text",
    gitUrl: "https://github.com/RuanCxrdoso/NLW-Notes",
    previewUrl: "https://nlw-smart-notes.vercel.app/",
    image: "/assets/projects/nlw-expert-notes.png",
    tag: ["All", "React"],
  },
  {
    id: 5,
    title: "Login form",
    description: "A simple login form with CSS",
    gitUrl: "https://github.com/RuanCxrdoso/Login-Form",
    previewUrl: "https://login-form-foundations.vercel.app",
    image: "/assets/projects/loginFormPreview.png",
    tag: ["All", "Vanilla Js"],
  },
  {
    id: 6,
    title: "Portfolio",
    description: "My personal portfolio made with Next",
    gitUrl: "https://github.com/RuanCxrdoso/portfolio-website",
    previewUrl: "https://rcardoso.vercel.app",
    image: "/assets/projects/myPortfolio.jpg",
    tag: ["All", "React"],
  },
  {
    id: 7,
    title: "Spotify Interface",
    description: "Spotify Clone with Tailwind",
    gitUrl: "https://github.com/RuanCxrdoso/Spotify-Clone",
    previewUrl: "https://desktop-spotify-clone.vercel.app",
    image: "/assets/projects/spotifyClone.png",
    tag: ["All", "Vanilla Js"],
  },
  {
    id: 8,
    title: "Calculator",
    description: "Calculator with 4 operations",
    gitUrl: "https://github.com/RuanCxrdoso/Calc-Js",
    previewUrl: "",
    image: "/assets/projects/calcJs.png",
    tag: ["All", "Vanilla Js"],
  },
  {
    id: 9,
    title: "iMovi",
    description: "Bootstrap Landing Page",
    gitUrl: "https://github.com/RuanCxrdoso/Landing-Page",
    previewUrl: "",
    image: "/assets/projects/iMovi.jpg",
    tag: ["All", "Vanilla Js"],
  },
  // {
  //   id: 7,
  //   title: "",
  //   description: "",
  //   gitUrl: "https://github.com/RuanCxrdoso/",
  //   previewUrl: "",
  //   image: "/assets/projects/",
  //   tag: [],
  // },
  // {
  //   id: 8,
  //   title: "",
  //   description: "",
  //   gitUrl: "https://github.com/RuanCxrdoso/",
  //   previewUrl: "",
  //   image: "/assets/projects/",
  //   tag: [],
  // },
]

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  function handleTagClick(id) {
    setActiveTag(id)
  }

  const filteredProjects = projectsData.filter((project) => project.tag.includes(activeTag))

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects">
      <h2 className="py-2 text-center text-4xl sm:text-6xl font-bold mt-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A900] via-[#F28900] to-[#F25900]">My projects</span>
      </h2>
      <div className="text-white md:text-xl font-semibold flex justify-center items-center gap-16 w-auto my-12">
        <ProjectTag selectFilter={() => handleTagClick("All")}  tag="All" active={activeTag === "All"} />
        <ProjectTag selectFilter={() => handleTagClick("React")}  tag="React" active={activeTag === "React"} />
        <ProjectTag selectFilter={() => handleTagClick("Vanilla Js")}  tag="Vanilla Js" active={activeTag === "Vanilla Js"} />
      </div>

      <div className="italic text-xs text-[#ADB7BE] text-center -mt-4 mb-6">Click on the card for more !</div>

      <ul ref={ref} className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8 md:gap-12">
        {
          filteredProjects.map((project, index) => (
            <motion.li 
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={ isInView ? "animate" : "initial" }
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard
                title={project.title}
                imgUrl={project.image}
                description={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}

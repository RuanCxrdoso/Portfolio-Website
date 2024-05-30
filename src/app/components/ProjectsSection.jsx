"use client"

import { useState, useRef } from "react"
import { ProjectCard } from "./ProjectCard"
import { ProjectTag } from "./ProjectTag"
import { motion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"


export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("React")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const txt = useTranslations('ProjectSection')
  
  const projectsData = [
    {
      id: 13,
      title: "NLW - Unite",
      description: txt('unite.description'),
      gitUrl: "https://github.com/RuanCxrdoso/NLW-Unite",
      previewUrl: "https://rcardoso-nlw-unite.vercel.app",
      image: "/assets/projects/nlwPassCover.png",
      tag: ["All", "React"],
    },
    {
      id: 12,
      title: "BurgerBit",
      description: txt('burgerBit.description'),
      gitUrl: "https://github.com/RuanCxrdoso/Burger-Landing",
      previewUrl: "https://rcardoso-burger-landing-page.vercel.app/",
      image: "/assets/projects/burgerCover.png",
      tag: ["All", "React"],
    },
    {
      id: 11,
      title: "Ignite Shop",
      description: txt('igniteShop.description'),
      gitUrl: "https://github.com/RuanCxrdoso/Ignite-shop",
      previewUrl: "https://rcardoso-ignite-shop.vercel.app",
      image: "/assets/projects/previewShop.png",
      tag: ["All", "React"],
    },
    {
      id: 2,
      title: "Ignite DT Money",
      description: txt('dtMoney.description'),
      gitUrl: "https://github.com/RuanCxrdoso/DT-Money",
      previewUrl: "https://rcardoso-ignite-dt-money.vercel.app",
      image: "/assets/projects/DTmoney.png",
      tag: ["All", "React"],
    },
    {
      id: 3,
      title: "Ignite Timer",
      description: txt('igniteTimer.description'),
      gitUrl: "https://github.com/RuanCxrdoso/Ignite-Timer",
      previewUrl: "https://rcardoso-ignite-timer.vercel.app",
      image: "/assets/projects/igniteTimer.png",
      tag: ["All", "React"],
    },
    {
      id: 4,
      title: "Ignite Feed",
      description: txt('igniteFeed.description'),
      gitUrl: "https://github.com/RuanCxrdoso/Ignite-Feed",
      previewUrl: "https://rcardoso-ignite-feed.vercel.app",
      image: "/assets/projects/igniteFeed.png",
      tag: ["All", "React"],
    },
    {
      id: 5,
      title: "NLW - Expert",
      description: txt('expert.description'),
      gitUrl: "https://github.com/RuanCxrdoso/NLW-Notes",
      previewUrl: "https://rcardoso-nlw-expert.vercel.app",
      image: "/assets/projects/nlw-expert-notes.png",
      tag: ["All", "React"],
    },
    // {
    //   id: 1,
    //   title: "NLW - IA",
    //   description: txt('ia.description'),
    //   gitUrl: "https://github.com/RuanCxrdoso/NLW-IA",
    //   previewUrl: "https://rcardoso-nlw-ia.vercel.app",
    //   image: "/assets/projects/nlwIA.png",
    //   tag: ["All", "Vanilla Js"],
    // },
    {
      id: 6,
      title: "Login form",
      description: txt('loginForm.description'),
      gitUrl: "https://github.com/RuanCxrdoso/Login-Form",
      previewUrl: "https://rcardoso-login-form.vercel.app",
      image: "/assets/projects/loginFormPreview.png",
      tag: ["All", "Vanilla Js"],
    },
    {
      id: 7,
      title: txt('portfolio.title'),
      description: txt('portfolio.description'),
      gitUrl: "https://github.com/RuanCxrdoso/portfolio-website",
      previewUrl: "https://rcardoso.vercel.app",
      image: "/assets/projects/myPortfolio.jpg",
      tag: ["All", "React"],
    },
    {
      id: 8,
      title: "Spotify Interface",
      description: txt('spotify.description'),
      gitUrl: "https://github.com/RuanCxrdoso/Spotify-Clone",
      previewUrl: "https://rcardoso-spotify-clone.vercel.app",
      image: "/assets/projects/spotifyClone.png",
      tag: ["All", "Vanilla Js"],
    },
    // {
    //   id: 9,
    //   title: "Calculator",
    //   description: "Calculator with 4 operations",
    //   gitUrl: "https://github.com/RuanCxrdoso/Calc-Js",
    //   previewUrl: "",
    //   image: "/assets/projects/calcJs.png",
    //   tag: ["All", "Vanilla Js"],
    // },
    // {
    //   id: 10,
    //   title: "iMovi",
    //   description: "Bootstrap Landing Page",
    //   gitUrl: "https://github.com/RuanCxrdoso/Landing-Page",
    //   previewUrl: "",
    //   image: "/assets/projects/iMovi.jpg",
    //   tag: ["All", "Vanilla Js"],
    // },
  ]

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
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A900] via-[#F28900] to-[#F25900]">{txt('title')}</span>
      </h2>
      <div className="text-white md:text-xl font-semibold flex justify-center items-center gap-16 w-auto my-12">
        <ProjectTag selectFilter={() => handleTagClick("All")}  tag={txt('allTag')} active={activeTag === "All"} />
        <ProjectTag selectFilter={() => handleTagClick("React")}  tag="React" active={activeTag === "React"} />
        <ProjectTag selectFilter={() => handleTagClick("Vanilla Js")}  tag="Vanilla Js" active={activeTag === "Vanilla Js"} />
      </div>

      <div className="italic text-xs text-[#ADB7BE] text-center -mt-4 mb-6">
        {txt('subtitle')}
      </div>

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

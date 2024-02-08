"use client"
import GithubIcon from "../../../public/assets/github-icon.svg"
import LinkedinIcon from "../../../public/assets/linkedin-icon.svg"
import WhatsAppLogo from "../../../public/assets/whatsapp-logo.png"
import Link from "next/link"
import Image from "next/image"
import { EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const textVariants = {
  onScreen: { opacity: 1, translateX: 0 },
  offScreen: { opacity: 0, translateX: -50 }
}
const formVariants = {
  onScreen: { opacity: 1, translateX: 0 },
  offScreen: { opacity: 0, translateX: 50 }
}

export function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const inView1 = useInView(ref1, { once: false })
  const inView2 = useInView(ref2, { once: false })

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">

      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F2A900] to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <motion.div
        ref={ref1}
        initial="offScreen"
        animate={ inView1 ? "onScreen" : "offScreen" }
        transition={{ duration: 1.5 }}
        variants={textVariants}
        className="z-10"
      >
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 w-4/5 sm:max-w-md">I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/RuanCxrdoso" target="_blank">
            <Image src={GithubIcon} width={50} height={50} alt="Github Icon"/>
          </Link>
          <Link href="https://www.linkedin.com/in/ruancardosolinkdin/" target="_blank">
            <Image src={LinkedinIcon} width={50} height={50} alt="Linkedin Icon" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        initial="offScreen"
        animate={ inView2 ? "onScreen" : "offScreen" }
        transition={{ duration: 1.5 }}
        variants={formVariants}
        className="flex flex-col gap-10 justify-center items-start mt-10 sm:mt-0 z-10"
      >
        <h5 className="text-xl font-bold text-white py-2 mt-6 sm:mt-0 sm:-mb-4">Talk with me !</h5>
        <div className="flex flex-col gap-12 sm:gap-10 justify-center items-start -ml-4 sm:ml-0 sm:w-full">
          <Link
            href="mailto:cardosoruan2001@gmail.com"
            className="group flex justify-start items-center gap-4 bg-[#141414] p-4 px-6 sm:px-8 rounded-xl w-full sm:w-4/5 relative transform hover:-translate-y-2 transition-transform duration-300"
          >
            <EnvelopeIcon width={35} height={35} />
            <span className="text-md sm:text-xl font-semibold">cardosoruan2001@gmail.com</span>
            <ArrowRightIcon width={20} height={20} className="absolute right-8 hidden sm:block transform group-hover:translate-x-2 transition-transform duration-300"/>
          </Link>
          <Link
            href="https://wa.me/55071986944657"
            className="group flex justify-start items-center gap-4 bg-[#141414] p-4 px-6 sm:px-8 rounded-xl w-full sm:w-4/5 relative transform hover:-translate-y-2 transition-transform duration-300"
          >
            <Image src={WhatsAppLogo} alt="" height={35} width={35}/>
            <span className="text-md sm:text-xl font-semibold">Send me a message ;)</span>
            <ArrowRightIcon width={20} height={20} className="absolute right-8 hidden sm:block transform group-hover:translate-x-2 transition-transform duration-300"/>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

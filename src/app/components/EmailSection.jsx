"use client"
import GithubIcon from "../../../public/assets/github-icon.svg"
import LinkedinIcon from "../../../public/assets/linkedin-icon.svg"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  async function handleSubmit(ev) {
    ev.preventDefault()
    const data = {
      email: ev.target.email.value,
      subject: ev.target.subject.value,
      message: ev.target.message.value,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = "/api/email"

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options)
    const resData = await response.json()

    if (response.status === 200) {
      console.log('Messa sent !');
      setEmailSubmitted(true)
    }
  }

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F2A900] to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/RuanCxrdoso" target="_blank">
            <Image src={GithubIcon} width={50} height={50} alt="Github Icon"/>
          </Link>
          <Link href="https://www.linkedin.com/in/ruancardosolinkdin/" target="_blank">
            <Image src={LinkedinIcon} width={50} height={50} alt="Linkedin Icon"/>
          </Link>
        </div>
      </div>
      <div className="mt-10 sm:mt-0 z-10">
        <form className="flex flex-col gap-4">
          <div className="mb-2">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
            <input type="email" name="email" id="email" required placeholder="me@google.com" className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />
          </div>
          <div className="mb-2">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
            <input type="text" name="subject" id="subject" required placeholder="Subject..." className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />
          </div>
          <div className="mb-2">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
            <textarea type="text" name="message" id="message" required placeholder="Let's talk about..." className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 resize-none h-32" />
          </div>
          <button 
            onSubmit={handleSubmit} 
            type="submit" 
            className="bg-[#F2A900] text-[#000] hover:bg-[#F27900] transition-colors duration-300 font-semibold text-md rounded-lg py-2.5 px-5 w-full"
          >
            Send Message
          </button>
          {
            emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )
          }
        </form>
      </div>
    </section>
  )
}

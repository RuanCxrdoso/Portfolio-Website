"use client"
import { useState } from "react"
import Link from "next/link"
import { NavLink } from "./NavLink"
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid"
import { MenuOverlay } from "./MenuOverlay"
import { useTranslations } from "next-intl"
import ToggleSwitch from "./ToggleSwitch"


export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  
  // const openButonDisabled = navbarOpen && 'hidden'
  const txt = useTranslations('Navbar')
  
  const navLinks = [
    {
      title: txt('aboutLink'),
      path: "#about",
    },
    {
      title: txt('certificationsLink'),
      path: "#certifications",
    },
    {
      title: txt('projectsLink'),
      path: "#projects",
    },
    {
      title: txt('contactLink'),
      path: "#contact",
    },
  ]

  function handleSetNavbarClose() {
    setNavbarOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#080808] z-20">
      <div className="flex flex-wrap justify-between items-center mx-auto py-4 px-4 md:py-8 md:px-6 lg:px-10 2xl:px-20">
        <Link href={"#home"} className="text-lg md:text-2xl 2xl:text-3xl text-white">
          <span className="text-[#ADB7BE]">&lt;</span>
          <span className="text-[#ADB7BE]">R </span>
          <span className="text-[#F2A900]">CARDOSO </span>
          <span className="text-[#ADB7BE]">/&gt;</span>
        </Link>

        <div className="display flex justify-center items-center space-x-2 md:space-x-4 lg:space-x-8 2xl:space-x-16">
          <ToggleSwitch />
          <div className="mobile-menu block md:hidden">
            <button onClick={() => setNavbarOpen(true)} disabled={navbarOpen} className="flex items-center px-3 py-2 rounded text-slate-200 disabled:opacity-0">
              <Bars3BottomRightIcon className="h-7 w-7"/>
            </button>
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row items-center md:gap-6 lg:gap-8 2xl:gap-20 mt-0">
              {navLinks.map((navs, index) => {
                return (
                  <li key={index}>
                    <NavLink href={navs.path} title={navs.title} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <MenuOverlay links={navLinks} setNavBarOpen={handleSetNavbarClose} navOpen={navbarOpen} />
    </nav>
  )
}
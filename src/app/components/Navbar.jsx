"use client"
import { useState } from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid"
import { MenuOverlay } from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Certifications",
    path: "#certifications",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const openButonDisabled = navbarOpen && 'hidden'

  function handleSetNavbarClose() {
    setNavbarOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#141414] z-20">
      <div className="flex flex-wrap justify-between items-center mx-auto py-4 px-4 md:py-8 md:px-12 lg:px-20">
        <Link href={"#about"} className="text-lg md:text-2xl lg:text-3xl text-white">
          <span className="text-[#ADB7BE]">&lt;</span>
          <span className="text-[#ADB7BE]">R </span>
          <span className="text-[#F2A900]">CARDOSO </span>
          <span className="text-[#ADB7BE]">/&gt;</span>
        </Link>

        <div className="mobile-menu block md:hidden">
          <button onClick={() => setNavbarOpen(true)} disabled={navbarOpen} className="flex items-center px-3 py-2 rounded text-slate-200 disabled:opacity-0">
            <Bars3BottomRightIcon className="h-7 w-7"/>
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row items-center md:gap-10 lg:gap-12 mt-0">
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

      <MenuOverlay links={navLinks} setNavBarOpen={handleSetNavbarClose} navOpen={navbarOpen} />
    </nav>
  )
}
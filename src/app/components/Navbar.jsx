"use client"
import { useState } from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { MenuOverlay } from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#141414]">
      <div className="flex flex-wrap justify-between items-center mx-auto p-6 md:p-8">
        <Link href={"/"} className="text-lg md:text-4xl text-white font-semibold">
          &lt;RCARDOSO/&gt;
        </Link>
        <div className="mobile-menu block md:hidden">
          {
            navbarOpen ? (
              <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <XMarkIcon className="h-5 w-5"/>
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <Bars3Icon className="h-5 w-5"/>
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row items-center md:gap-12 mt-0">
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
      {
        navbarOpen ? (
          <MenuOverlay links={navLinks} />
        ) : (
          ''
        )
      }
    </nav>
  )
}
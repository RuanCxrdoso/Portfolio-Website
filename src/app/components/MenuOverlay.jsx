'use client'

import { NavLink } from "./NavLink"
import { XMarkIcon } from '@heroicons/react/24/solid'

export function MenuOverlay({ links, setNavBarOpen, navOpen }) {
  const navOpenTransition = navOpen ? 'translate-x-0' : 'translate-x-full'

  return(
    <div className={`${navOpenTransition} bg-black/80 transition-all duration-500 fixed inset-0`}>

      <button onClick={setNavBarOpen} className="absolute left-4 top-4 flex items-center px-3 py-2 rounded text-slate-20">
        <XMarkIcon className="h-10 w-10"/>
      </button>

      <div className={`${navOpenTransition} absolute right-0 flex items-center justify-center h-full w-[70%] bg-[#141414] transition-all duration-500 delay-200`}>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F2A900] to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute bottom-0 -right-[55%] translate-y-[60%]"></div>
        <ul className="flex flex-col justify-around items-center h-3/4">
          {
            links.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} setNavBarOpen={setNavBarOpen} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

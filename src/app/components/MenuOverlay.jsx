'use client'

import { NavLink } from "./NavLink"
import { XMarkIcon } from '@heroicons/react/24/solid'

export function MenuOverlay({ links, setNavBarOpen, navOpen }) {
  const navOpenTransition = navOpen ? 'translate-x-0' : '-translate-x-full'

  return(
    <div className={`${navOpenTransition} bg-black/80 transition-all duration-500 fixed inset-0`}>
      <button onClick={setNavBarOpen} className="absolute right-4 top-4 flex items-center px-3 py-2 rounded text-slate-20">
        <XMarkIcon className="h-10 w-10"/>
      </button>

      <div className={`${navOpenTransition} flex items-center justify-center h-full w-[60%] bg-[#141414] transition-all duration-500 delay-200`}>
        <ul className="flex flex-col py-4 justify-between items-center h-3/4">
          {
            links.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

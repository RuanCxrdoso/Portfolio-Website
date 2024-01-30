import { NavLink } from "./NavLink"

export function MenuOverlay({ links }) {
  return(
    <ul className="flex flex-col py-4 gap-4 items-center">
      {
        links.map((link, index) => (
          <li key={index} className="flex justify-center w-10/12 border-b border-zinc-800">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))
      }
    </ul>
  )
}

import Link from "next/link"

export function NavLink({ href, title}) {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#F2A900] sm:text-xl rounded md:p-0 hover:text-[#F28900] transition-colors duration-300">{title}</Link>
  )
}
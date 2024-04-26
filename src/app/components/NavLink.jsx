import Link from "next/link"

export function NavLink({ href, title }) {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-xl sm:text-xl rounded md:p-0 text-[#F2A900] hover:text-[#F28900] transition-colors duration-300">{title}</Link>
  )
}
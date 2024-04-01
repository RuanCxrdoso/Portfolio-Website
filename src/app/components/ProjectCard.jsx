import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  return (
    <div className="transform hover:-translate-y-4 transition-transform duration-300">
      <div 
        className="h-52 md:h-72 rounded-t-xl overflow-hidden relative group" 
        style={{ 
          background: `url(${imgUrl}) center left`, 
          backgroundSize: "cover"
        }}>
          <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] hidden bg-opacity-0 group-hover:flex group-hover:bg-opacity-70 transition-all duration-300 justify-center items-center gap-12">

            <Link href={gitUrl} target="_blank" className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
            </Link>

            <Link href={previewUrl} target="_blank" className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
            </Link>

          </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#141414] py-4 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

import { motion } from "framer-motion"

const variants = {
  default: { width: 0 },
  active: { width: "100%" }
}

export function ProjectTag({ tag, active, selectFilter }) {
  const style = active ? 
    "text-[#F2A900]"
    : 
    "text-[#ADB7BE] hover:text-white"

  return (
    <button onClick={selectFilter} className={`pb-2 ${style} transition-all duration-300 overflow-hidden`}>
      {tag}
      <motion.div 
        animate={ active ? "active" : "default" }
        variants={variants}
        className="h-0.5 bg-[#F2A900] mt-2"
      ></motion.div>
    </button>
  )
}

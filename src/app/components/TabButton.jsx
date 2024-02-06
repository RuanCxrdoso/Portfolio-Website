import { motion } from "framer-motion"

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 1.4rem)" }
}

export function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? 'text-[#F2A900] hover:text-[#F2A900]' : 'text-[#ADB7BE] hover:text-white border-transparent '

  return (
    <button onClick={selectTab}>
      <p className={`mr-6 font-semibold transition-colors duration-300 cursor-pointer ${buttonClasses}`}>
        {children}
      </p>
      <motion.div 
        animate={ active ? "active" : "default" }
        variants={variants}
        className="h-0.5 bg-[#F2A900] mt-2 mr-3"
      ></motion.div>
    </button>
  )
}
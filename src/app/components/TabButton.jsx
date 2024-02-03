export function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? 'text-[#F2A900] hover:text-[#F2A900] border-b-2 border-[#F2A900]' : 'text-[#ADB7BE] hover:text-white border-transparent '

  return (
    <button onClick={selectTab}>
      <p className={`mr-6 pb-1 font-semibold border-b-2 transition-colors duration-300 cursor-pointer ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}
export function ProjectTag({ tag, active, selectFilter }) {
  const style = active ? 
    "border-b-4 border-[#F2A900] text-[#F2A900]"
    : 
    "border-b-4 border-transparent text-[#ADB7BE] hover:text-white"

  return (
    <button onClick={selectFilter} className={`pb-2 ${style} transition-all duration-300`}>{tag}</button>
  )
}

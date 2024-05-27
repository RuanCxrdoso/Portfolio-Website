"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

import brazilFlag from '../../../public/assets/brazil-flag.png'
import usaFlag from '../../../public/assets/usa-flag.png'
import { usePathname, useRouter } from '../../../navigation'

export default function TestSwitch() {
  const [isToggled, setIsToggled] = useState(() => {
    const toggleState = localStorage.getItem('isToggled')
    return toggleState ? JSON.parse(toggleState) : false
  })

  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Atualiza o localStorage sempre que isToggled mudar
    localStorage.setItem('isToggled', JSON.stringify(isToggled));
  }, [isToggled])

  const toggleSwitch = () => {
    setIsToggled((prev) => {
      const newToggled = !prev
      toggleLanguage(newToggled)
      return newToggled
    })
  }

  const toggleLanguage = (isToggled) => {
    isToggled ? router.push(pathname, { locale: 'pt' }) : router.push(pathname, { locale: 'en' })
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative inline-flex items-center h-8 rounded-full w-16 cursor-pointer"
        onClick={toggleSwitch}
      >
        <div
          className="absolute inset-0 opacity-80 rounded-full transition bg-gradient-to-r from-[#F2A900] via-[#F2B900] to-[#F25900]"
        ></div>
        <div
          className={`absolute inset-y-0 left-0 flex items-center justify-center w-10 h-full transition duration-300
            ${isToggled ? 'translate-x-6' : 'translate-x-0'}
          `}
        >
          <Image src={isToggled ? brazilFlag : usaFlag} alt="usa flag" width={25} height={25} />
        </div>
      </div>
    </div>
  )
}

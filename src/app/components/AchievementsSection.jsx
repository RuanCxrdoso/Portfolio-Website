"use client"

import AnimatedNumber from "react-animated-numbers"

export function AchievementsSection() {
  const achievementsList = [
    {
      metric: "Projects",
      value: 10,
      postfix: "+",
    },
    {
      prefix: "~",
      metric: "Lines",
      value: 23.481,
    },
    {
      metric: "Certifications",
      value: 7,
      postfix: "+",
    },
    {
      metric: "Years",
      value: 1,
      postfix: "+",
    },
  ]

  return (
    <div className="mt-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col gap-12 sm:flex-row sm:gap-0 items-center justify-between">
        {
          achievementsList.map((achievement, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center mx-4">
                <h2 className="text-white text-4xl font-bold flex">
                  {achievement?.prefix ? <span>{achievement.prefix} </span> : ''}
                  <AnimatedNumber 
                    includeComma 
                    animateToNumber={achievement.value} 
                    transitions={(index) => ({
                      type: "just",
                      duration: index + 1.5,
                    })}
                  />
                  {achievement?.postfix ? <span>{achievement.postfix}</span> : ''}
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
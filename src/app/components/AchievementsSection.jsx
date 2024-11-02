"use client"

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const AnimatedNumber = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

export function AchievementsSection() {
  const txt = useTranslations('AchievementsSection')

  const achievementsList = [
    {
      metric: txt('achievementsList.projects'),
      value: 13,
      postfix: "+",
    },
    {
      prefix: "~",
      metric: txt('achievementsList.lines'),
      value: 28.201,
    },
    {
      metric: txt('achievementsList.certifications'),
      value: 9,
      postfix: "+",
    },
    {
      metric: txt('achievementsList.years'),
      value: 2,
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
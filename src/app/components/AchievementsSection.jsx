export function AchievementsSection() {
  const achievementsList = [
    {
      metric: "Projects",
      value: "10",
      postfix: "+",
    },
    {
      prefix: "~",
      metric: "Lines",
      value: "20,000",
    },
    {
      metric: "Certifications",
      value: "5",
      postfix: "+",
    },
    {
      metric: "Years",
      value: "1",
      postfix: "+",
    },
  ]

  return (
    <div className="mt-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {
          achievementsList.map((achievement, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center mx-4">
                <h2 className="text-white text-4xl font-bold">
                  {achievement?.prefix ? <span>{achievement.prefix}</span> : ''}
                  {achievement.value}
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
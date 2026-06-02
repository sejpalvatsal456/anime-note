import React from "react"

type ContenetSectionProps = {
  title: string,
  children: React.ReactElement
}

const ContentSection = (
  { title, children }: ContenetSectionProps
) => {
  return (
    <div className="ml-10 flex flex-col gap-5 w-[60%]">

      <h1 className="text-3xl font-semibold">
        {title}
      </h1>

      <div className="relative">

        {/* Text */}
        {children}
      </div>

    </div>
  )
}

export default ContentSection

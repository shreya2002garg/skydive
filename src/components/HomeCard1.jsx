import React from 'react'

export default function HomeCard1({ title1, title2, description }) {
  return (
    <div className="p-4 md:p-10 lg:p-16 w-full flex flex-col items-center">
      <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] text-center">
        <span className="font-semibold text-blue-700">{title1}</span>
        <span>{title2}</span>
      </h1>
      <div className="rounded-md border-red-300 border-[3px] md:border-[5px] h-[40vh] md:h-[60vh] lg:h-[70vh] w-full sm:w-[80%] md:w-[70%] lg:w-[60%] my-6 md:my-8">
        {/* Placeholder content */}
      </div>
      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-center w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
        {description}
      </h3>
      <button className="px-6 py-2 bg-black text-white mt-4">See X10 in action</button>
    </div>
  )
}

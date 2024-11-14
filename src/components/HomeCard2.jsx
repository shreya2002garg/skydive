import React from 'react'

export default function HomeCard2({ title1, title2, imgLink, description }) {
  return (
    <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] p-4 flex flex-col items-center text-center">
      <img className="h-[200px] sm:h-[230px] w-full object-cover rounded mb-4" src={imgLink} alt="Remote Ops" />
      <h1 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] mb-2">
        <span className="text-blue-600">{title1}</span>
        <span>{title2}</span>
      </h1>
      <h3 className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-500 mb-4">{description}</h3>
      <button className="border-black border-[2px] rounded-md px-4 py-2">Learn More</button>
    </div>
  )
}

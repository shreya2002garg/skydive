import React from 'react'

export default function HomeCard3({ title, logo, imglink }) {
  return (
    <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] p-4">
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left mb-4">
        <h1 className="font-semibold text-[16px] sm:text-[18px] md:text-[20px]">{title}</h1>
        <img className="h-10 md:h-12 w-auto mt-2 md:mt-0" src={logo} alt="Company Logo" />
      </div>
      <img className="rounded-md w-full h-[150px] md:h-[170px] object-cover" src={imglink} alt="Success Story" />
    </div>
  )
}

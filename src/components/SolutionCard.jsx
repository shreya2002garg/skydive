import React from 'react'

export default function SolutionCard({imgLink, Title}) {
  return (
    <div className="hover:text-blue-600 text-center w-[250px] md:w-auto">
      <img className="h-[200px] w-[200px] md:h-[250px] md:w-[250px]" src={imgLink} alt="Solution" />
      <h1 className="text-[20px] md:text-[25px] mt-2 capitalize border-b-2 border-black">{Title}</h1>
    </div>
  )
}

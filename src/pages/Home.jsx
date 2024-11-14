import React, { useState } from 'react'
import SolutionCard from '../components/SolutionCard'
import HomeCard1 from '../components/HomeCard1'
import HomeCard2 from '../components/HomeCard2'
import HomeCard3 from '../components/HomeCard3'
import Contact from './Contact'

export default function Home() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="mt-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <h1 className="text-center text-[24px] sm:text-[20px] md:text-[35px] lg:text-[40px] leading-tight max-w-[90%] lg:max-w-[80%] m-20">
          <span className="block">
            <span className="font-semibold text-black">Know more. Risk less.</span>
            <span className="block text-gray-500">Skydio drone programs help even the</span>
          </span>
          <span className="block text-gray-500">most dangerous work get done safer, smarter, and faster</span>
          <span className="block text-gray-500">through remote autonomous flight.</span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 mt-8 md:mt-10">
          <SolutionCard Title="testing" imgLink="https://cdn.sanity.io/images/mgxz50fq/~production-v3/e7ebea5b813a594acdb48398676975c0f373eca8-1728x720.png?w=320&amp;fit=max&amp;auto=format" />
          <SolutionCard Title="testing" imgLink="https://cdn.sanity.io/images/mgxz50fq/~production-v3/e7ebea5b813a594acdb48398676975c0f373eca8-1728x720.png?w=320&amp;fit=max&amp;auto=format" />
          <SolutionCard Title="testing" imgLink="https://cdn.sanity.io/images/mgxz50fq/~production-v3/e7ebea5b813a594acdb48398676975c0f373eca8-1728x720.png?w=320&amp;fit=max&amp;auto=format" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 md:mt-20">
        <h1 className="text-center text-[32px] sm:text-[45px] md:text-[50px] lg:text-[60px] font-semibold leading-tight max-w-[90%] lg:max-w-[80%] space-y-2">
          <span className="block">Build a complete drone program</span>
          <span className="block">to capture data wherever</span>
          <span className="block">and whenever you need it.</span>
        </h1>

        <div className="mt-6 md:mt-10 w-full flex justify-center flex-wrap gap-6">
          <HomeCard1
            description="A world-class drone program starts with Skydio X10. Loaded with the best sensors in its class, guided by the most advanced AI in the sky, and built to gather the data you need, wherever and whenever you need it."
            title1="Skydio X10:"
            title2="You’ve never seen like this before."
          />
          <HomeCard1
            description="A world-class drone program starts with Skydio X10. Loaded with the best sensors in its class, guided by the most advanced AI in the sky, and built to gather the data you need, wherever and whenever you need it."
            title1="Skydio X10:"
            title2="You’ve never seen like this before."
          />
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-6 md:gap-10 mt-16 md:mt-20">
        <HomeCard2
          title1="Remote Ops: "
          title2="Command drones everywhere, all at once, from anywhere."
          description="Fly from any browser and realize total control over how, where, and when you capture and share critical data with this powerful software only offered by Skydio. Looking for a solution for your DFR program? Check out DFR Command."
          imgLink="https://cdn.sanity.io/images/mgxz50fq/~production-v3/b1be150e68dffcd2d0b7dfe2c28330888cd86615-746x496.png?w=1600&fit=max&auto=format"
        />
        <HomeCard2
          title1="Remote Ops: "
          title2="Command drones everywhere, all at once, from anywhere."
          description="Fly from any browser and realize total control over how, where, and when you capture and share critical data with this powerful software only offered by Skydio. Looking for a solution for your DFR program? Check out DFR Command."
          imgLink="https://cdn.sanity.io/images/mgxz50fq/~production-v3/b1be150e68dffcd2d0b7dfe2c28330888cd86615-746x496.png?w=1600&fit=max&auto=format"
        />
        <HomeCard2
          title1="Remote Ops: "
          title2="Command drones everywhere, all at once, from anywhere."
          description="Fly from any browser and realize total control over how, where, and when you capture and share critical data with this powerful software only offered by Skydio. Looking for a solution for your DFR program? Check out DFR Command."
          imgLink="https://cdn.sanity.io/images/mgxz50fq/~production-v3/b1be150e68dffcd2d0b7dfe2c28330888cd86615-746x496.png?w=1600&fit=max&auto=format"
        />
      </div>

      <div className="mt-20 md:mt-40">
        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold ml-10 md:ml-40 mb-7">Success Stories from the field.</h1>
        <div className="flex flex-wrap justify-evenly gap-6 md:gap-10">
          <HomeCard3
            title="AEP Deploys autonomous drones to optimize outage response"
            logo="https://cdn.sanity.io/images/mgxz50fq/~production-v3/800f322d5b707ca95ff913ed93d205fca0cb0157-216x110.png?w=1600&fit=max&auto=format"
            imglink="https://cdn.sanity.io/images/mgxz50fq/~production-v3/27d8f72d5121999cc8ea2d757b44fbac4fa5bc08-1564x880.png"
          />
          <HomeCard3
            title="AEP Deploys autonomous drones to optimize outage response"
            logo="https://cdn.sanity.io/images/mgxz50fq/~production-v3/800f322d5b707ca95ff913ed93d205fca0cb0157-216x110.png?w=1600&fit=max&auto=format"
            imglink="https://cdn.sanity.io/images/mgxz50fq/~production-v3/27d8f72d5121999cc8ea2d757b44fbac4fa5bc08-1564x880.png"
          />
          <HomeCard3
            title="AEP Deploys autonomous drones to optimize outage response"
            logo="https://cdn.sanity.io/images/mgxz50fq/~production-v3/800f322d5b707ca95ff913ed93d205fca0cb0157-216x110.png?w=1600&fit=max&auto=format"
            imglink="https://cdn.sanity.io/images/mgxz50fq/~production-v3/27d8f72d5121999cc8ea2d757b44fbac4fa5bc08-1564x880.png"
          />
        </div>
        <button onClick={toggleSidebar} className="bg-black text-white px-4 py-2 mt-10 ml-10 md:ml-20">See More Customer Stories</button>

      </div>
      <button className='mt-20 ml-[50%] mb-5 bg-black text-white px-6 py-3'>Contact Us</button>
      {isSidebarVisible && <Contact />}
    </div>
  )
}

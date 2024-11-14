import React from 'react';
import '../../App.css';

export default function AssetInspection() {
  return (
    <div className="px-4">
      <div>
        <h1 className="text-[30px] sm:text-[40px] md:text-[50px] mt-24 w-full md:w-[55%] font-bold">
          Keep your equipment and facilities in peak performance.
        </h1>
        
        <div className="flex flex-col md:flex-row justify-evenly w-full mt-10 gap-10">
          <img className="w-full md:w-[50%] h-[20rem] md:h-[35rem] rounded-md" src="https://cdn.sanity.io/images/mgxz50fq/~production-v2/d833655d8a8a723db84a040f4a3bf6e13e9568d7-1072x1072.jpg?w=1072&h=1072&auto=format" alt="" />
          <div className="text-center md:text-left">
            <h1 className="font-semibold text-[24px] sm:text-[30px] w-full md:w-[70%]">
              Get high-quality data to inform maintenance decisions. You’ll reduce maintenance costs with well-timed repairs while increasing uptime for critical defense assets.
            </h1>
            <p className="text-[16px] sm:text-[20px] w-full md:w-[70%] mt-4">
              Our autonomous technology makes it easy for personnel at any skill level to fly. And, when you add our Remote Ops capabilities, you can program fully automated inspections.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between mt-20 gap-6">
          <div className="bg-black text-white h-auto w-full md:w-[40%] rounded-md p-6">
            <img src="https://cdn.sanity.io/images/mgxz50fq/production-v2-black/2fff5b36c15077ad04f8088e7b977ba438bd53ad-77x77.svg" alt="" />
            <h1 className="text-[20px] md:text-[25px] mt-4 w-full md:w-[50%]">
              Trusted by every branch of the U.S. DoD, all FVEY countries and across NATO.
            </h1>
          </div>
          <div className="bg-gray-200 text-[24px] md:text-[40px] font-semibold w-full md:w-[50%] p-5">
            We were in a hangar with a C-130 a couple of weeks ago. The drone, which is phenomenal, was just flying right around it doing its thing.
          </div>
        </div>
        
        <div className="mt-20">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] text-center md:text-left ml-0 md:ml-32 mb-10 font-bold w-full md:w-[50%]">
            No other inspection drone performs like Skydio.
          </h1>
          
          <div className="flex flex-col md:flex-row justify-evenly gap-10 mb-10">
            <img className="h-[50vh] md:h-[100vh] w-full md:w-[40%] rounded-lg" src="https://cdn.sanity.io/images/mgxz50fq/~production-v2/c8fce9248210425373ba9c376140c223d3774485-1072x1072.png?w=1072&h=1072&auto=format" alt="" />
            <div className="pl-0 md:pl-24">
              <h1 className="text-[24px] md:text-[30px] mb-4 md:mb-20 font-bold w-full md:w-[30%]">
                Easily capture every last detail.
              </h1>
              <p className="text-[18px] md:text-[22px] w-full md:w-[55%]">
                Gain an accurate picture of asset health without putting personnel at risk. Conduct aerial inspections with best-in-class sensors.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] font-semibold w-full md:w-[60%] ml-0 md:ml-32 mb-10">
            Three more reasons military leaders love Skydio.
          </h1>
          
          <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
            {['Mission Support', 'Automated Reporting', 'Precision Accuracy'].map((title, index) => (
              <div key={index} className="flex flex-col gap-6 items-center md:items-start">
                <img className="h-[200px] md:h-[300px] w-[200px] md:w-[300px]" src="https://cdn.sanity.io/images/mgxz50fq/~production-v2/0c5c2a1693ca35997bf5c21f40e571643d4ac32d-1200x1200.png?w=600&h=600&auto=format" alt="" />
                <h1 className="font-semibold text-[20px] md:text-[30px] text-center md:text-left">{title}</h1>
                <p className="text-[16px] md:text-[18px] w-full md:w-[350px] text-center md:text-left">
                  Engage our team of experts to help you develop best practices for training and safety programs for your installation or drone program.
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-black text-white py-10 mt-20">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] text-center w-full md:w-[50%] font-medium mx-auto">
            Get better data on asset health with Skydio Defense inspection.
          </h1>
          
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 mt-10">
            {Array(4).fill().map((_, index) => (
              <div key={index} className="border-[1px] mt-10 p-6 w-full md:w-[300px] border-white text-center">
                <img className="h-[10vh] md:h-[15vh] w-full md:w-[15vw] mb-6 mx-auto" src="https://cdn.sanity.io/images/mgxz50fq/~production-v2/125ab220acecb2589384d9527044ed32912c43a4-2846x1203.png?w=460&h=194&auto=format" alt="" />
                <h3 className="text-[20px] md:text-[25px]">Skydio X10D</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

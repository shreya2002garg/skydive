import React from 'react';

export default function SkydioX10() {
    return (
        <div className="mt-24">
            <h1 className="text-center text-[40px] sm:text-[60px] md:text-[90px] font-semibold">Skydio X10</h1>
            <h1 className="mt-10 text-center text-[18px] sm:text-[24px] md:text-[30px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
                The best sensors for a drone this small, piloted by the most advanced AI in the sky. To get the data you need, wherever and whenever you need it.
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-10">
                {Array(4).fill().map((_, i) => (
                    <div key={i} className="text-center">
                        <h1 className="text-[20px] sm:text-[24px] md:text-[30px]">45 mph</h1>
                        <p className="text-[14px] sm:text-[16px]">Max Light Speed</p>
                    </div>
                ))}
            </div>

            <img className="w-[90%] sm:w-[80%] md:w-[1200px] h-auto mt-20 mx-auto" src="https://cdn.sanity.io/images/mgxz50fq/~production-v2/e9b02a2534c46b1b4d690e9f8f3b8003d751b373-2930x1120.png?w=1366&h=522&auto=format" alt="Skydio X10" />
            
            <h1 className="text-center text-[40px] sm:text-[50px] md:text-[70px] font-medium w-[80%] md:w-[60%] mx-auto mt-10">Visionary cameras to get the job done.</h1>
            <h1 className="text-center text-[18px] sm:text-[24px] md:text-[30px] w-[90%] sm:w-[80%] md:w-[60%] mx-auto mt-4">
                Packing more megapixels and better optics than any drone its size, Skydio X10 boasts high resolution visual and radiometric cameras in modular sensor packages. So you can capture the right details for your job.
            </h1>
            
            <img className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto mt-10" src="https://cdn.sanity.io/images/mgxz50fq/~production-v2/b028356b0626e65c873c455fd8c32f7b3d576b60-2928x1412.png?w=1366&h=659&auto=format" alt="Camera" />

            <div className="mb-20">
                <h1 className="text-[30px] sm:text-[40px] md:text-[50px] font-medium w-[80%] md:w-[60%] lg:w-[50%] mx-auto mt-10">Get the detail you need from a distance.</h1>
                <h1 className="text-[16px] sm:text-[20px] md:text-[30px] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto mt-4">
                    The telephoto camera on the VT300-Z sensor package enables you to detect objects, vehicles, and humans as soon as they enter your field of view — giving you the visual clarity to make critical decisions quickly.
                </h1>
                <img className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto mt-10" src="https://cdn.sanity.io/images/mgxz50fq/~production-v2/489a7b184dcec577efc936e9ad95eced45158dd5-2352x800.png?w=1366&h=465&auto=format" alt="Telephoto camera" />
            </div>

            <div className="flex flex-wrap justify-evenly items-start gap-10 mb-10">
                {Array(3).fill().map((_, i) => (
                    <div key={i} className="w-[90%] sm:w-[70%] md:w-[30%] text-center md:text-left">
                        <h1 className="font-medium mb-3 text-[20px] sm:text-[25px]">Unmatched thermal sensitivity</h1>
                        <p>The Boson+ sensor is 40% more sensitive than comparable thermal units on the market.</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 mx-auto">
                <img className="w-full md:w-[45%] h-auto rounded-md" src="https://cdn.sanity.io/images/mgxz50fq/~production-v2/d833655d8a8a723db84a040f4a3bf6e13e9568d7-1072x1072.jpg?w=1072&h=1072&auto=format" alt="Data Capture" />
                <div className="text-center md:text-left px-5">
                    <h1 className="font-semibold text-[20px] sm:text-[24px] md:text-[30px]">
                        Get high-quality data to inform maintenance decisions. You’ll reduce maintenance costs with well-timed repairs while increasing uptime for critical defense assets.
                    </h1>
                    <p className="text-[14px] sm:text-[18px] md:text-[20px] mt-4">
                        Our autonomous technology makes it easy for personnel at any skill level to fly. And, when you add our Remote Ops capabilities, you can program fully automated inspections.
                    </p>
                </div>
            </div>

            <p className="text-[20px] w-[90%] sm:w-[70%] md:w-[50%] mx-auto mt-12">The sensor packages on the Skydio X10 supercharge your sight, enabling you to capture it all in high-definition. Because the data is in the details.</p>
            <button className="bg-black text-white py-4 px-7 rounded-md mt-4 mx-auto block">Get The Details</button>

            <div className="mt-20">
                <h1 className="text-center text-[40px] sm:text-[50px] md:text-[70px] font-medium">Onboard AI. Off-the-charts capability.</h1>
                <h1 className="text-[16px] sm:text-[20px] md:text-[25px] w-[90%] sm:w-[70%] md:w-[60%] mx-auto mt-4">
                    Fly without limits or learning curves. With a drone that recognizes its surroundings, captures data automatically, and gets smarter over time.
                </h1>
                <div className="border-red-400 w-full h-[50vh] md:h-[90vh] mb-15 border-2 mx-auto"></div>
                <h1 className="text-[16px] sm:text-[20px] md:text-[25px] w-[90%] sm:w-[70%] md:w-[60%] mx-auto mt-10">
                    Backed by an onboard NVIDIA Jetson Orin GPU, the X10 harnesses unrivaled computing power to make the right decisions in real-time. Six custom-designed navigation lenses provide 360-degree visibility, eliminating blind spots so you can fly fearlessly in any environment.
                </h1>
            </div>
        </div>
    );
}

import React from 'react'

export default function Contact1() {
    return (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto transition-transform duration-300 transform translate-x-0 z-50">
            <h2 className="text-xl font-semibold mb-4">Which Team would you like to contact today</h2>
            <div className='flex mt-10 flex-col gap-5'>
                <button className='bg-black text-white px-4 py-3 rounded-md'>Sales</button>
                <button className='bg-black text-white px-4 py-3 rounded-md'>Support</button>
                <button className='bg-black text-white px-4 py-3 rounded-md'>Tech Partnership</button>
                <button className='bg-black text-white px-4 py-3 rounded-md'>Federal/Global govt. integration</button>
                <button className='bg-black text-white px-4 py-3 rounded-md'>reseller</button>
                <button className='bg-black text-white px-4 py-3 rounded-md'>press</button>
            </div>
        </div>
    )
}
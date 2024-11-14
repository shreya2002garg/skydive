import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <img src="/logo.svg" alt="Logo" className="w-20 h-20 mb-5 md:mb-0" />
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-5">
          <p>To get the latest on Skydio innovations, news, and updates, subscribe now.</p>
          <div className="flex items-center w-full md:w-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-l px-3 py-2 w-full md:w-48 focus:outline-none"
            />
            <button className="bg-black text-white rounded-r px-5 py-2">Subscribe</button>
          </div>
        </div>
        <div className="flex gap-4 mt-5 md:mt-0">
          <button className="bg-black text-white px-4 py-2 rounded">Contact</button>
          <button className="border border-black px-4 py-2 rounded">Blog</button>
          <button className="border border-black px-4 py-2 rounded">US</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-semibold">Drones & Docks</h3>
          <ul>
            {['Skydio X10', 'Skydio X10D', 'Skydio X2D', 'Skydio S2+', 'Skydio Dock'].map((item, index) => (
              <li key={index} className="border-b border-gray-400 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Solutions</h3>
          <ul>
            {['For Defense', 'For Public Safety', 'For Energy & Utilities', 'For Other Industries'].map((item, index) => (
              <li key={index} className="border-b border-gray-400 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Software</h3>
          <ul>
            {['Explore Skydio Apps', 'DFR Command', 'Remote Ops', 'Skydio 3D Scan', 'Extend Integrated Workflows'].map(
              (item, index) => (
                <li key={index} className="border-b border-gray-400 py-2">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Services</h3>
          <ul>
            {['Regulatory Services', 'Success Services'].map((item, index) => (
              <li key={index} className="border-b border-gray-400 py-2">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mt-6">Platform</h3>
          <ul>
            <li className="border-b border-gray-400 py-2">Skydio Autonomy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul>
            {[
              'Resource Center',
              'Customer Stories',
              'Blog',
              'Support Center',
              'Skydio Academy',
              'Authorized Resellers',
              'Events',
              'Ascend 2024',
            ].map((item, index) => (
              <li key={index} className="border-b border-gray-400 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Company</h3>
          <ul>
            {['About Us', 'Careers', 'Skydio For All', 'Newsroom', 'Security Trust Center'].map((item, index) => (
              <li key={index} className="border-b border-gray-400 py-2">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mt-6">Shop</h3>
          <ul>
            {['Shop Skydio Branded Merch', 'Shop S2+ Accessories'].map((item, index) => (
              <li key={index} className="border-b border-gray-400 py-2">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mt-6">Legal</h3>
          <ul>
            <li className="border-b border-gray-400 py-2">Legal Center</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

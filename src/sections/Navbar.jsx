import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
export default function Navbar() {
    return (
        <header
            style={{ background: "#f0f0f0", backdropFilter: 'blur(10px)' }}
            className="h-20 fixed top-0 left-0 right-0 rounded-md mx-6 my-4 overflow-visible px-4 py-4 flex justify-between items-center z-50"
        >
            {/* Logo */}
            <div className='flex items-center'>
    <NavLink to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="none" viewBox="0 0 121 108">
            <path fill="#22211F" fillRule="evenodd" d="M120.99 15.953c0 6.965-21.382 18.723-120.99 37.97V.001h108.417v8.313s12.573 1.722 12.573 7.639ZM12.804 106.95c-5.722-1.273-9.638-5.318-9.638-11.234 0-5.992 4.066-26.512 105.406-56.694v68.826H28.69c-11.97 0-14.72-.632-15.672-.851-.084-.019-.153-.035-.215-.047Z" clipRule="evenodd"></path>
        </svg>
    </NavLink>
</div>

            {/* Navigation Links */}
            <div className="relative">
                <ul className="relative list-none flex gap-6">
                    {/* Products Menu */}
                    <li className="relative group nav-items">
                        <NavLink to="/products" className="font-semibold text-gray-700 hover:text-blue-600">
                            Products
                        </NavLink>
                        <ul className="dropdown absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md overflow-hidden w-48 z-50">
                            <li><NavLink to="/products/skydioX10" className="block px-4 py-2 hover:bg-gray-100">SkyDioX10</NavLink></li>
                            {/* <li><NavLink to="/products/category2" className="block px-4 py-2 hover:bg-gray-100">Category 2</NavLink></li>
                            <li><NavLink to="/products/category3" className="block px-4 py-2 hover:bg-gray-100">Category 3</NavLink></li> */}
                        </ul>
                    </li>

                    {/* Resources Menu */}
                    <li className="relative group nav-items">
                        <NavLink to="/resources" className="font-semibold text-gray-700 hover:text-blue-600">
                            Resources
                        </NavLink>
                        <ul className="dropdown absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md overflow-hidden w-48 z-50">
                            <li><NavLink to="/resources/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</NavLink></li>
                            {/* <li><NavLink to="/resources/resource2" className="block px-4 py-2 hover:bg-gray-100">Resource 2</NavLink></li> */}
                        </ul>
                    </li>

                    {/* Solutions Menu */}
                    <li className="relative group nav-items">
                        <NavLink to="/solutions" className="font-semibold text-gray-700 hover:text-blue-600">
                            Solutions
                        </NavLink>
                        <ul className="dropdown absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md overflow-hidden w-48 z-50">
                            <li><NavLink to="/solutions/asset-inspection" className="block px-4 py-2 hover:bg-gray-100">Asset Inspection</NavLink></li>
                            {/* <li><NavLink to="/solutions/solution2" className ="block px-4 py-2 hover:bg-gray-100">Solution 2</NavLink></li> */}
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Contact and Blog Buttons */}
            <div className="flex items-center gap-7">
                <button className="bg-black text-white px-4 py-2 rounded-md">Contact</button>
                <button className="text-gray-700 hover:text-blue-600">Blog</button>
            </div>
        </header>
    );
}
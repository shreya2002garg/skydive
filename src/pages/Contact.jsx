import React from 'react';

const Contact = () => {
  return (
    <div className="h-full w-80 bg-white shadow-lg p-6 overflow-y-auto transition-transform duration-300 transform translate-x-0">
      <h2 className="text-xl font-semibold mb-4">Let us know how we can help you.</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Business Email Address</label>
          <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Industry</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Choose your industry</option>
            <option>Industry 1</option>
            <option>Industry 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>United States</option>
            {/* Add other countries as needed */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">How do you want to use a drone solution?</label>
          <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="3"></textarea>
        </div>

        <div className="flex items-start">
          <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
          <label className="ml-2 block text-sm text-gray-700">Yes, I want to receive news and updates from Skydio</label>
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </form>

      <p className="mt-4 text-xs text-gray-500">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
    </div>
  );
};

export default Contact;

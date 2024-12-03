import React from 'react';
import '../Pages/Home.css';
import Logo from '../Assets/brndwhite.png';

function Navbar() {
  return (
<div style={{ backgroundColor: '#000000', padding: '50px' }}>
  <nav
    style={{ borderRadius: '16px', backgroundColor: '#232323' }}
    className="border-gray-200 dark:bg-gray-200 dark:border-gray-700"
  >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img style={{ justifyItems: 'start', width: '150px' }} src={Logo} className="h-9" alt="Flowbite Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 montserrat">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                SHOP
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 dark:text-red md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 dark:text-red md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                CATAGORY
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 dark:text-red-50 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;

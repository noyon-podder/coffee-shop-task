import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] py-5 w-full">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Link className="flex items-center gap-3">
                <img className="w-20 h-auto" src={Logo} alt="" />
                <span className="text-gray-700 text-3xl font-semibold uppercase">
                  coffee
                </span>
              </Link>

              <p className="max-w-sm mt-3 text-gray-500">
                Collaboratively leverage existing compelling total linkage
                rather than fully tested action items. Appropriately
                conceptualize highly.
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase font-bold">About</h3>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Company
                </Link>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  community
                </Link>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Careers
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase font-bold">Blog</h3>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Tec
                </Link>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Music
                </Link>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Videos
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase font-bold">
                  Opening Days
                </h3>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Monday
                </Link>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Tuesday
                </Link>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Wednesday
                </Link>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Thursday
                </Link>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Friday
                </Link>
                <Link className="block mt-2 text-sm text-gray-600  hover:underline">
                  Saturday
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase font-bold">Contact</h3>
                <span className="block mt-2 text-sm text-gray-600  hover:underline">
                  +880 1752441505
                </span>
                <span className="block mt-2 text-sm text-gray-600  hover:underline">
                  noyon.podder7@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none" />

        <div>
          <p className="text-center text-gray-500 ">
            © Brand 2023 - All rights reserved - Noyon Podder
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
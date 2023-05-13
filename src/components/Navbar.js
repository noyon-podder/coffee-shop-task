import React, { useState } from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
  let links = [
    {name: 'Home', link: "/"},
    {name: 'menu', link: "/menu-list"},
    {name: 'Login', link: "/login"},
    {name: 'Registration', link: "/registration"},
  ]
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md ">
      <div className="md:flex md:justify-between bg-white py-4 md:px-20 px-7">
        <div className="flex items-center gap-3">
          <img src={logo} className="w-14" alt="" />
          <span className="font-semibold text-2xl uppercase italic text-gray-700">
            coffee
          </span>
        </div>
        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          {open ?<IoClose />: <HiMenuAlt1 />  }
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all-duration-500 ease-in ${open ? "top-16 opacity-100":"top-[-490px]"} md:opacity-100 opacity-0 `}>
          {links.map((link) => (
            <li className="md:ml-8 text-xl md:my-0 my-7" key={link.name}>
              <Link
                to={link.link}
                className="text-gray-800 hover:text-orange-400 capitalize duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar
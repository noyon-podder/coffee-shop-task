import React, { useContext, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import logo from "../images/logo.png";

const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "menu", link: "/menu-list" },
  ];
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="shadow-md ">
      <div className="md:flex md:justify-between bg-white py-4 md:px-20 px-7">
        <div>
          <Link className="flex items-center gap-3"  to="/">
            <img src={logo} className="w-14" alt="" />
            <span className="font-semibold text-2xl uppercase italic text-gray-700">
              coffee
            </span>
          </Link>
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <HiMenuAlt1 />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all-duration-500 ease-in ${
            open ? "top-16 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0 `}
        >
          {links.map((link) => (
            <li className="md:ml-8 text-xl md:my-0 my-7" key={link.name}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-400 capitalize"
                    : "text-gray-800 hover:text-orange-400 capitalize duration-500"
                }
                to={link.link}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {user?.uid ? (
            <button
              onClick={handleLogOut}
              className="w-full px-6 py-3 lg:ml-8 ml-0 lg:mt-0 mt-6  text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#333] rounded-lg lg:w-auto hover:bg-[#b6885b] focus:outline-none focus:bg-[#C7A17A]"
            >
              Log Out
            </button>
          ) : (
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-400 capitalize lg:ml-8"
                  : "text-gray-800 lg:ml-8 hover:text-orange-400 capitalize duration-500"
              }
              to="/login"
            >
              Login
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { navLinks } from "../assets/constants";
import { useState } from "react";
import { close, viramayak_text_only_logo, menu } from "../assets/images";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="h-[50px] w-full flex justify-between items-center">
      <img
        src={viramayak_text_only_logo}
        alt="viramayak"
        className="w-[80px] h-[40px]"
      />

      <ul className="list-none hidden justify-end items-center flex-1 sm:flex">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`cursor-pointer ${index == navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-gradient-to-l from-slate-700 to-slate-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-l`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

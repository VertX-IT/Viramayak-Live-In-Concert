import { navLinks } from "../assets/constants";
import { useState } from "react";
import { close, viramayak_text_only_logo, menu } from "../assets/images";

const Navbar = () => {
  return (
    <nav className="h-[100px] w-full flex flex-row items-center justify-center">
      <ul className="list-none flex justify-center items-center flex-row">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`cursor-pointer ${index == navLinks.length - 1 ? "mr-0" : "mr-[120px]"}`}
            >
              <a href={`#${nav.id}`} className="text-primary font-semibold">{nav.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

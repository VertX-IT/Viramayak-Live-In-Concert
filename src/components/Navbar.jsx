import { navLinks } from '../assets/constants';
import { useState } from 'react';
import { close, viramayak_text_only_logo, menu } from '../assets/images';

const Navbar = () => {
  return (
    <nav className="min-h-[100px] max-w-full flex flex-row items-center justify-center">
      <ul className="list-none flex justify-center items-center flex-row">
        {navLinks.map((nav, index) => {
          return (
            <li key={nav.id} className={`cursor-pointer`}>
              <a href={`#${nav.id}`} className="text-primary text-xl font-semibold mx-16 text-center">
                {nav.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

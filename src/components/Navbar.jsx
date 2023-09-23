import { navLinks } from '../assets/constants';

const Navbar = () => {
  return (
    <nav className="hidden min-h-[100px] max-w-full lg:flex flex-row items-center justify-center">
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

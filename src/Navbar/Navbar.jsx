import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/Vector.svg"; // Replace with your logo
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

// Updated Menu Links
export const MenuLinks = [
  {
    id: 1,
    name: "Find a Doctor",
    link: "/find-doctor", // Corrected link
  },
  {
    id: 2,
    name: "Our Services",
    link: "/services",
  },
  {
    id: 3,
    name: "About Us",
    link: "/about",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="Healthcare Logo" className="w-5" />
            <span className="text-2xl sm:text-3xl font-semibold">
              HealthCare+
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4"> {/* Reduced gap */}
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {/* Book Appointment Button */}
              <Link to="/book-appointment" className="primary-btn">
                Book Appointment
              </Link>
              {/* Sign Up / Log In Button */}
              <Link
                to="/auth"
                className="primary-btn bg-secondary hover:bg-secondary-dark text-white px-3 py-2 rounded-lg transition duration-300"
              >
                Sign Up / Log In
              </Link>
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* Responsive Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;

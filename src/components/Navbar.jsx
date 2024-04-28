import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { links } from "../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:justify-between sm:py-8">
        <h2 className="text-2xl font-bold text-gray-100 font-serif">the_SWE</h2>
        <div className="hidden sm:flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide text-gray-100 hover:text-gray-300 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
        {/*dropdown button only for small screens */}
        <div className="sm:hidden absolute top-6 right-6 z-50">
          <button
            onClick={toggleDropdown}
            className="text-white text-2xl cursor-pointer"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {/* Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-gray-800 text-white absolute top-20 right-4">
          <ul className="p-4">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-gray-100 hover:text-gray-300 duration-300 block p-1"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

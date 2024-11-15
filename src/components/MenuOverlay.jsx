import React from "react";
import NavLink from "./NavLink";
import { XMarkIcon } from "@heroicons/react/24/solid"; 

const MenuOverlay = ({ Link, closeMenu }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-50">
      <div className="flex flex-col py-4 items-center justify-center h-full">
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-white p-2"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Links */}
        <ul className="flex flex-col space-y-4">
          {link.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuOverlay;

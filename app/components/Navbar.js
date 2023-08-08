import React from "react";

const Navbar = () => {
  return (
    <div className="navbar w-2/4 mx-auto text-white border border-white rounded-full py-3">
      <ul className="flex items-center justify-center">
        <li className="px-6 border-r">
          <a
            href="#"
            className="font-medium   border-white transition-all ease-in duration-200 "
          >
            <span className="navbar-text-num">1. </span>{" "}
            <span className="navbar-text">About</span>
          </a>
        </li>
        <li className="px-6 border-r">
          <a
            href="#"
            className="font-medium   border-white transition-all ease-in duration-200 "
          >
            <span className="navbar-text-num">2. </span>{" "}
            <span className="navbar-text">Experience</span>
          </a>
        </li>
        <li className="px-6 border-r">
          <a
            href="#"
            className="font-medium   border-white transition-all ease-in duration-200 "
          >
            <span className="navbar-text-num">3. </span>{" "}
            <span className="navbar-text">Work</span>
          </a>
        </li>
        <li className="px-6 ">
          <a
            href="#"
            className="font-medium   border-white transition-all ease-in duration-200 "
          >
            <span className="navbar-text-num">4. </span>{" "}
            <span className="navbar-text">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

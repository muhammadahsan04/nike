import React from "react";
import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="" />
        </a>
        {/* <img
          src={hamburger}
          width={30}
          height={29}
          alt=""
        /> */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in </a>
          <span>/ </span>
          <a href="/">Explore now</a>
        </div>
        <div className="max-lg:block hidden">
          <img
            src={hamburger}
            // className="max-lg:block hidden"
            width={25}
            height={25}
            alt=""
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

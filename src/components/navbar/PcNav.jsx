import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <div style={{ height: "10vh" }} className="hidden sm:block">
      <div className="flex h-full  max-w-5xl mx-auto items-center justify-between">
        <Logo logo="Logo" />
        <ul className="flex space-x-6 capitalize justify-around">
          <NavItem href="/" text="home" />
          <NavItem href="/about" text="about" />
          <NavItem href="/contact" text="contact" />
          <NavItem href="/login" text="login" />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

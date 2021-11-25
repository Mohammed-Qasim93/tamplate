import React, { useState } from "react";
import PcNav from "./PcNav";
import ResponsiveNav from "./ResponsiveNav";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav
        style={{
          backgroundColor: "#f9f9ff",
        }}
        className="fixed  shadow-md w-full"
      >
        <PcNav />
        <ResponsiveNav
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleNav={toggleNav}
        />
      </nav>
    </header>
  );
};

export default NavBar;

import React, { useState } from "react";
import PcNav from "./PcNav";
import ResponsiveNav from "./ResponsiveNav";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <header>
      <nav
        style={{
          backgroundColor: "#f9f9ff",
        }}
        className="fixed  shadow-md w-full"
      >
        <PcNav isShow={isShow} toggleShow={toggleShow} />
        <ResponsiveNav
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleNav={toggleNav}
          toggleShow={toggleShow}
          isShow={isShow}
        />
      </nav>
    </header>
  );
};

export default NavBar;

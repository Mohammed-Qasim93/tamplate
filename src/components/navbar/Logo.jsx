import React from "react";

const Logo = ({ logo }) => {
  return (
    <a className="font-bold text-xl" href="/">
      {logo}
    </a>
  );
};

export default Logo;

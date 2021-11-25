import React from "react";

const NavItem = ({ text, href }) => {
  const isActive = (r) => {
    if (window.location.pathname === r) {
      return "text-gray-700 animate-pulse ";
    } else return "";
  };

  return (
    <li className="p-2 font-semibold rounded-md overflow-hidden hover:bg-gray-200 focus:bg-red-200">
      <a href={href} className={`${isActive(href)} p-2`}>
        {text}
      </a>
    </li>
  );
};

export default NavItem;

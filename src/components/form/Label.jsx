import React from "react";

const Label = ({ elNme, text }) => {
  return (
    <label className="capitalize w-24 mr-1" htmlFor={elNme}>
      {" "}
      {text}{" "}
    </label>
  );
};

export default Label;

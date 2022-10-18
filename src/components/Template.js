import React from "react";
import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <h1 className="text">My TODO List ({todoLength})</h1>
      <div>{children}</div>
    </div>
  );
};

export default Template;

import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
  return <button className="text-3xl font-bold stroke-lime-700" onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string,
  onClick:PropTypes.func
};
export default Button;

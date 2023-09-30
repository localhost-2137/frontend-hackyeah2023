import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  isLink?: boolean;
  to?: string;
  variant?: string
};

const Button = ({ children, type, className, isLink, to, variant }: ButtonProps) => {
  let classes = `border-none px-4 py-5`;
  if (className) {
    classes += ` ${className}`;
  }
  if (isLink && to) {
    return (
      <Link to={to} className={`border-none px-4 py-5 ${className} `}>
        {children}
      </Link>
    );
  } else {
    if (variant === "light-blue") {
      classes += "bg-light-blue-500 hover:bg-light-blue-600 text-white";
    } else if (variant === "red") {
      classes += "bg-red-500 hover:bg-red-600 text-white";
    } else if (variant === "white") {
      classes += "bg-white hover:bg-gray-100 text-gray-900";
    }
    console.log(variant, classes);
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;

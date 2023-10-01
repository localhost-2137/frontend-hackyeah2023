import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  isLink?: boolean;
  to?: string;
  variant?: "green" | "red" | "yellow";
  onClick?: () => void;
};

const Button = ({
  children,
  type,
  className,
  isLink,
  to,
  variant,
  onClick,
}: ButtonProps) => {
  switch (variant) {
    case "green":
      if (isLink && to) {
        return (
          <Link
            to={to}
            onClick={onClick}
            className={`bg-dark-100 hover:bg-dark-300 border-4 border-dark-300 px-3 py-2 hover:text-add3-300 text-add3-300 rounded-full text-center ${className}`}
          >
            {children}
          </Link>
        );
      } else {
        return (
          <button
            className={`bg-dark-100 hover:bg-dark-300 border-4 border-dark-300 px-3 py-2 hover:text-add3-300 text-add3-300 rounded-full text-center ${className}`}
          >
            {children}
          </button>
        );
      }
    case "red":
      if (isLink && to) {
        return (
          <Link
            to={to}
            className={`bg-add2-100 hover:bg-add2-300 border-4 border-add2-300 px-3 py-2 hover:text-add3-300 text-add3-300 rounded-full text-center ${className}`}
            onClick={onClick}
          >
            {children}
          </Link>
        );
      } else {
        return (
          <button
            className={`bg-add2-100 hover:bg-add2-300 border-4 border-add2-300 px-3 py-2 hover:text-add3-300 text-add3-300 rounded-full text-center ${className}`}
          >
            {children}
          </button>
        );
      }
    case "yellow":
      if (isLink && to) {
        return (
          <Link
            to={to}
            className={`bg-add3-100 hover:bg-add3-300 border-4 border-add3-300 px-3 py-2 hover:text-add3-100 text-add3-500 rounded-full text-center ${className}`}
            onClick={onClick}
          >
            {children}
          </Link>
        );
      } else {
        return (
          <button
            className={`bg-add3-100 hover:bg-add3-300 border-4 border-add3-300 px-3 py-2 hover:text-add3-100 text-add3-500 rounded-full text-center ${className}`}
          >
            {children}
          </button>
        );
      }
  }

  return (
    <button
      type={type}
      className={`border-none px-4 py-5 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

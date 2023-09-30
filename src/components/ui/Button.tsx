import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  isLink?: boolean;
  to?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  type,
  className,
  isLink,
  to,
  onClick,
}: ButtonProps) => {
  if (isLink && to) {
    return (
      <Link
        to={to}
        className={`border-none px-4 py-5 ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  } else
    return (
      <button
        type={type}
        onClick={onClick}
        className={`border-none px-4 py-5 ${className}`}
      >
        {children}
      </button>
    );
};

export default Button;

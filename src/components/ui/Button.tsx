import React from "react";
import {Link} from "react-router-dom";

type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
    isLink?: boolean;
    to?: string;
    variant?: "green" | "red" | "yellow"
};

const Button = ({children, type, className, isLink, to, variant}: ButtonProps) => {

    if (isLink && to) {
        return (
            <Link to={to} className={`border-none px-4 py-5 ${className} `}>
                {children}
            </Link>
        );
    }

    switch (variant) {
        case "green":
            return <button
                className={`bg-dark-100 hover:bg-dark-300 border-4 border-dark-300 px-3 py-2 ${className}`}>{children}</button>
        case "red":
            return <button
                className={`bg-add2-100 hover:bg-add2-300 border-4 border-add2-300 px-3 py-2 ${className}`}>{children}</button>;
        case "yellow":
            return <button
                className={`bg-add3-100 hover:bg-add3-300 border-4 border-add3-300 px-3 py-2 text-add3-700 ${className}`}>{children}</button>;
    }

    return (
        <button type={type} className={`border-none px-4 py-5 ${className}`}>
            {children}
        </button>
    );
};

export default Button;

import React from "react";

type ButtonProps = {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset",
    className?: string
}

const Button = ({children, type, className}: ButtonProps) => {
    return (
        <button type={type} className={`border-none px-4 py-5 ${className}`}>
            {children}
        </button>
    )
}

export default Button
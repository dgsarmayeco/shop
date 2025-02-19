import React from "react";
import cn from "classnames";

interface ButtonProps {
    variant?: "fill" | "outline" | "text";
    color?: "footerMid" | "footerDark" | "footerDeepDark" | "footerLight" | "logoPrimary" | "logoSecondary";
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const colorClasses: Record<string, Record<string, string>> = {
    fill: {
        footerMid: "bg-[#d7e6f5] text-black hover:bg-[#b5cfe8]",
        footerDark: "bg-[#2c5494] text-white hover:bg-[#244883]",
        footerDeepDark: "bg-[#232347] text-white hover:bg-[#1a1a35]",
        footerLight: "bg-[#fdebd2] text-black hover:bg-[#fbd7a5]",
        logoPrimary: "bg-[#2b5395] text-white hover:bg-[#23457a]",
        logoSecondary: "bg-[#d3a73c] text-black hover:bg-[#b8902f]",
    },
    outline: {
        footerMid: "border border-[#d7e6f5] text-[#d7e6f5] hover:bg-[#d7e6f5] hover:text-black",
        footerDark: "border border-[#2c5494] text-[#2c5494] hover:bg-[#2c5494] hover:text-white",
        footerDeepDark: "border border-[#232347] text-[#232347] hover:bg-[#232347] hover:text-white",
        footerLight: "border border-[#fdebd2] text-[#fdebd2] hover:bg-[#fdebd2] hover:text-black",
        logoPrimary: "border border-[#2b5395] text-[#2b5395] hover:bg-[#2b5395] hover:text-white",
        logoSecondary: "border border-[#d3a73c] text-[#d3a73c] hover:bg-[#d3a73c] hover:text-black",
    },
    text: {
        footerMid: "text-[#d7e6f5] hover:underline",
        footerDark: "text-[#2c5494] hover:underline",
        footerDeepDark: "text-[#232347] hover:underline",
        footerLight: "text-[#fdebd2] hover:underline",
        logoPrimary: "text-[#2b5395] hover:underline",
        logoSecondary: "text-[#d3a73c] hover:underline",
    }
};

const Button: React.FC<ButtonProps> = ({
                                           variant = "fill",
                                           color = "logoPrimary",
                                           children,
                                           onClick,
                                           className,
                                       }) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-4 py-2 rounded-3xl transition-all duration-200 font-medium",
                colorClasses[variant][color],
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;

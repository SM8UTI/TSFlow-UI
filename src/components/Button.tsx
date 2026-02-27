"use client";

import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { Loader2 } from "lucide-react";

/** Utility for Tailwind class merging */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: "solid" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "solid",
            size = "md",
            isLoading = false,
            leftIcon,
            rightIcon,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50 rounded-xl relative overflow-hidden";

        const variants = {
            solid:
                "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20",
            outline:
                "border border-white/10 bg-transparent hover:bg-white/5 text-white",
            ghost: "hover:bg-white/5 text-gray-300 hover:text-white bg-transparent",
            link: "text-brand-primary underline-offset-4 hover:underline",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-6 text-sm",
            lg: "h-14 px-8 text-base",
            icon: "h-11 w-11",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={disabled || isLoading ? {} : { scale: 1.02 }}
                whileTap={disabled || isLoading ? {} : { scale: 0.96 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 shrink-0 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2 shrink-0">{leftIcon}</span>}
                <span className="truncate">{children as React.ReactNode}</span>
                {!isLoading && rightIcon && <span className="ml-2 shrink-0">{rightIcon}</span>}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

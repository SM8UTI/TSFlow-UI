import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import { HTMLMotionProps } from 'framer-motion';

interface FAQLink {
    label: string;
    href: string;
}
interface FAQItemData {
    question: string;
    answer: string;
    link?: FAQLink;
}
interface FAQLayoutProps {
    title?: string;
    description?: string;
    items: FAQItemData[];
    accentColor?: string;
}
declare function FAQLayout1({ title, description, items, accentColor, }: FAQLayoutProps): react_jsx_runtime.JSX.Element;

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: "solid" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { Button, FAQLayout1 };

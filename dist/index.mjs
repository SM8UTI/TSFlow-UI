var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/layouts/FAQ/FAQLayout1.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var FAQData = [
  {
    question: "What is TSFlow?",
    answer: "TSFlow is a powerful tool that allows you to create and manage your TypeScript projects with ease. It provides a seamless workflow for building, testing, and deploying your applications."
  },
  {
    question: "How does TSFlow work?",
    answer: "TSFlow works by providing a set of commands and utilities that streamline the development process. It integrates with popular tools and frameworks, allowing you to focus on writing code while it takes care of the rest."
  },
  {
    question: "Is TSFlow free to use?",
    answer: "Yes, TSFlow is an open-source project and is free to use. contact {{email}}, You can contribute to its development or use it in your projects without any cost. ",
    link: {
      label: "email",
      href: "mailto:"
    }
  }
];
var FAQItem = ({
  data,
  defaultOpen = false,
  accentColor = "bg-brand-primary"
}) => {
  const { question, answer } = data;
  const [toggle, setToggle] = useState(defaultOpen);
  const formatContent = (text) => {
    if (!(data == null ? void 0 : data.link)) {
      return text;
    }
    const regex = /{{(.*?)}}/g;
    const parts = text.split(regex);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return /* @__PURE__ */ jsx(
          "a",
          {
            href: data.link.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "underline text-brand-accent-2 hover:text-brand-secondary transition-colors",
            children: data.link.label
          },
          index
        );
      }
      return /* @__PURE__ */ jsx("span", { children: part }, index);
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "border border-white/20 rounded-lg p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        onClick: () => setToggle(!toggle),
        className: "flex flex-row items-center gap-3 sm:gap-4 cursor-pointer",
        children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              animate: { scale: toggle ? 0.9 : 1 },
              className: "size-8 sm:size-10 relative shrink-0",
              children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: `w-5 sm:w-6 ${accentColor} h-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full`
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { rotate: toggle ? -90 : 0 },
                    transition: { type: "spring", ease: "easeInOut", duration: 0.3 },
                    className: `w-5 sm:w-6 ${accentColor} h-1 rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full`
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-xl font-semibold", children: question })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: toggle && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.3, ease: "easeInOut" },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -24 },
            transition: { ease: "easeInOut", duration: 0.3, delay: 0.2 },
            className: "pt-4 sm:pt-6 pl-11 sm:pl-14",
            children: /* @__PURE__ */ jsx("p", { className: "leading-[160%] sm:leading-[180%] text-sm sm:text-base text-white/80", children: formatContent(answer) })
          }
        )
      }
    ) })
  ] });
};
function FAQLayout1({
  title = "Frequently asked questions",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque, quisquam, voluptatum, voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate",
  items = FAQData,
  accentColor = "bg-brand-primary"
}) {
  return /* @__PURE__ */ jsx("div", { className: "p-6 sm:p-8 lg:p-12 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-2/5", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-6xl font-semibold", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-white/80 mt-3 sm:mt-4", children: description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full lg:w-3/5 flex flex-col gap-3 sm:gap-4", children: items.map((data, index) => /* @__PURE__ */ jsx(FAQItem, { data, accentColor }, index)) })
  ] }) });
}

// src/components/Button.tsx
import { forwardRef } from "react";
import { motion as motion2 } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Loader2 } from "lucide-react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var Button = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "solid",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "isLoading",
      "leftIcon",
      "rightIcon",
      "children",
      "disabled"
    ]);
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50 rounded-xl relative overflow-hidden";
    const variants = {
      solid: "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20",
      outline: "border border-white/10 bg-transparent hover:bg-white/5 text-white",
      ghost: "hover:bg-white/5 text-gray-300 hover:text-white bg-transparent",
      link: "text-brand-primary underline-offset-4 hover:underline"
    };
    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
      icon: "h-11 w-11"
    };
    return /* @__PURE__ */ jsxs2(
      motion2.button,
      __spreadProps(__spreadValues({
        ref,
        whileHover: disabled || isLoading ? {} : { scale: 1.02 },
        whileTap: disabled || isLoading ? {} : { scale: 0.96 },
        className: cn(baseStyles, variants[variant], sizes[size], className),
        disabled: disabled || isLoading
      }, props), {
        children: [
          isLoading && /* @__PURE__ */ jsx2(Loader2, { className: "mr-2 flex-shrink-0 h-4 w-4 animate-spin" }),
          !isLoading && leftIcon && /* @__PURE__ */ jsx2("span", { className: "mr-2 flex-shrink-0", children: leftIcon }),
          /* @__PURE__ */ jsx2("span", { className: "truncate", children }),
          !isLoading && rightIcon && /* @__PURE__ */ jsx2("span", { className: "ml-2 flex-shrink-0", children: rightIcon })
        ]
      })
    );
  }
);
Button.displayName = "Button";
export {
  Button,
  FAQLayout1
};

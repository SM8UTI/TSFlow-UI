"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FAQLink {
  label: string;
  href: string;
}

interface FAQItemData {
  question: string;
  answer: string;
  link?: FAQLink;
}

interface FAQItemProps {
  data: FAQItemData;
  defaultOpen?: boolean;
  accentColor?: string;
}

interface FAQLayoutProps {
  title?: string;
  description?: string;
  items: FAQItemData[];
  accentColor?: string;
}

const FAQData: FAQItemData[] = [
  {
    question: "What is TSFlow?",
    answer:
      "TSFlow is a powerful tool that allows you to create and manage your TypeScript projects with ease. It provides a seamless workflow for building, testing, and deploying your applications.",
  },
  {
    question: "How does TSFlow work?",
    answer:
      "TSFlow works by providing a set of commands and utilities that streamline the development process. It integrates with popular tools and frameworks, allowing you to focus on writing code while it takes care of the rest.",
  },
  {
    question: "Is TSFlow free to use?",
    answer:
      "Yes, TSFlow is an open-source project and is free to use. contact {{email}}, You can contribute to its development or use it in your projects without any cost. ",
    link: {
      label: "email",
      href: "mailto:",
    },
  },
];

const FAQItem = ({
  data,
  defaultOpen = false,
  accentColor = "bg-brand-primary",
}: FAQItemProps) => {
  const { question, answer } = data;

  const [toggle, setToggle] = useState(defaultOpen);

  const formatContent = (text: string) => {
    if (!data?.link) {
      return text;
    }

    const regex = /{{(.*?)}}/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <a
            key={index}
            href={data.link!.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-brand-accent-2 hover:text-brand-secondary transition-colors"
          >
            {data.link!.label}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="border border-white/20 rounded-lg p-4 sm:p-6">
      <motion.div
        onClick={() => setToggle(!toggle)}
        className="flex flex-row items-center gap-3 sm:gap-4 cursor-pointer"
      >
        <motion.div
          animate={{ scale: toggle ? 0.9 : 1 }}
          className="size-8 sm:size-10 relative shrink-0"
        >
          <motion.div
            className={`w-5 sm:w-6 ${accentColor} h-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full`}
          />
          <motion.div
            animate={{ rotate: toggle ? -90 : 0 }}
            transition={{ type: "spring", ease: "easeInOut", duration: 0.3 }}
            className={`w-5 sm:w-6 ${accentColor} h-1 rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full`}
          />
        </motion.div>
        <h3 className="text-base sm:text-xl font-semibold">{question}</h3>
      </motion.div>
      <AnimatePresence initial={false}>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
              className="pt-4 sm:pt-6 pl-11 sm:pl-14"
            >
              <p className="leading-[160%] sm:leading-[180%] text-sm sm:text-base text-white/80">
                {formatContent(answer)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQLayout1({
  title = "Frequently asked questions",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque, quisquam, voluptatum, voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate",
  items = FAQData,
  accentColor = "bg-brand-primary",
}: FAQLayoutProps) {
  return (
    <div className="p-6 sm:p-8 lg:p-12 min-h-screen">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-24">
        <div className="w-full lg:w-2/5">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-white/80 mt-3 sm:mt-4">
            {description}
          </p>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col gap-3 sm:gap-4">
          {items.map((data, index) => (
            <FAQItem key={index} data={data} accentColor={accentColor} />
          ))}
        </div>
      </div>
    </div>
  );
}

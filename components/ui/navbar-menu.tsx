"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative  ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-gray-600 hover:opacity-[0.9] hover:text-gray-900 dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative border border-transparent  dark:border-white/[0.2]  shadow-input flex justify-center  space-x-4  py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  
}: {
  title: string;
  description: string;
  href: string;
  
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      {/* <Image
        src="/public/Kindergarten/kindergarten.jpeg"
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      /> */}
      <div>
        <h4 className="text-xl font-bold mb-1  text-gray-600  dark:text-white">
          {title}
        </h4>
        <p className="text-gray-600 text-sm max-w-[10rem] dark:text-neutral-300 hover:text-gray-950">
          {description}
        </p>
      </div>
    </Link>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-gray-600 dark:text-neutral-200 hover:text-gray-900 "
    >
      {children}
    </Link>
  );
};

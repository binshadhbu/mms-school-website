
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { lato } from "@/fonts";


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [active, setActive] = useState<string | null>(null);

  // Navigation items array
  const navItems = [
    { name: "About", href: "/about" },

    {
      name: "Programmes",
      href: "#",
      children: [
        { name: "Kindergarten", href: "/programmes/kindergarten" },
        { name: "Primary", href: "/programmes/primary" },
        { name: "High School", href: "/programmes/highschool" },
      ]
    },

    { name: "Activities", href: "/activities" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <div className={`${lato.className} font-lato `}>
      <nav className="block  w-full max-w-screen px-2 py-1 mx-auto bg-gray-900  sticky top-3 shadow lg:px-2 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <Link
            href="/"
            className=" block cursor-pointer py-1.5 text-white font-extrabold text-2xl flex"
          >
            <img src="/logo.png" className="w-12 h-12 rounded-full" alt="" />

            <h1 className="hidden sm:block pt-2 px-2">MMS Educational campus </h1>
            {/* <Image src="/logo.svg" alt="Logo" width={40} height={40} /> */}
          </Link>

          <div className="lg:hidden  text-gray-100">
            <button
              className="relative ml-auto  h-6 text-gray-200 hover:text-white hover:font-extrabold hover:scale-110  max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <Link
                href="/"
                className="cursor-pointer text-white font-extrabold text-xl pt-4 ps-4"
              >
                <img src="/logo.png" className="w-12 h-12 rounded-full" alt="" />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-gray-300 hover:text-white hover:font-extrabold hover:scale-110 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <Link
                    href={item.href}
                    className="flex items-center p-2 text-lg gap-x-2 text-white hover:text-gray-300 font-extrabold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 mt-1 flex flex-col gap-1">
                      {item.children.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-2 py-1 text-white hover:text-gray-300 font-normal"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group flex items-center p-1 text-lg gap-x-2 text-gray-300 hover:text-white font-extrabold font-mono"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                  {item.children && (
                    <ul className="absolute left-0 top-full hidden space-y-2 bg-slate-700 text-white group-hover:block z-50 shadow-lg rounded-lg">
                      {item.children.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subItem.href} className="block px-4 py-2 text-white hover:bg-gray-800">
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
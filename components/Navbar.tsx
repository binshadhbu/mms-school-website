
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [active, setActive] = useState<string | null>(null);

  // Navigation items array
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Programmes", href: "/programmes" },
    { name: "Activities", href: "/activities" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    // { name: "Achievements", href: "/achievements" },
    { name: "Team", href: "/team" }
  ];

  return (
    <div>
      <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-gray-900  sticky top-3 shadow lg:px-2 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <Link
            href="/"
            className=" block cursor-pointer py-1.5 text-white font-extrabold text-2xl"
          >
            <h1 className="sm:hidden block">MMS</h1>
            <h1 className="hidden sm:block">MMS Educational campus </h1>
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
                MMS
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
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-white hover:text-white font-extrabold"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
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
                  className="flex items-center p-1 text-lg gap-x-2 text-gray-300 hover:text-white font-extrabold font-mono"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
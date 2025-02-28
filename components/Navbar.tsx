// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import React, { useState } from "react";
// import { HoveredLink,  MenuItem, ProductItem } from "./ui/navbar-menu";
// import { AboutItems, activities, navItems } from "@/data";
// import Link from "next/link";
// import { Menu as MenuIcon, X } from "lucide-react";

// export function NavbarDemo() {
//   return (
//     <div className="relative w-full flex items-end text-white font-bold mt-20 ">
//       <Navbar />
//     </div>
//   );
// }

// function Navbar() {
//   const [active, setActive] = useState<string | null>(null);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed w-full bg-gray-950 dark:bg-black shadow-md px-6 py-4 z-50">
//       <div className="flex justify-between items-center max-w-7xl mx-auto">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
//           MMS School
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink href="/">Home</NavLink>
//           <NavLink href="/events">Events</NavLink>
//           <NavLink href="/contact">Contact</NavLink>

//           <MenuItem setActive={setActive} active={active} item="Programs">
//             <div className="text-sm grid grid-cols-2 gap-10 p-4">
//               {navItems.map((item, index) => (
//                 <ProductItem title={item.tag} href={item.href}  description={item.description} key={index} />
//               ))}
//             </div>
//           </MenuItem>

//           <MenuItem setActive={setActive} active={active} item="Activities">
//             <div className="flex flex-col space-y-4 text-sm">
//               {activities.map((activity, index) => (
//                 <HoveredLink href={activity.href} key={index}>{activity.title}</HoveredLink>
//               ))}
//             </div>
//           </MenuItem>

//           <MenuItem setActive={setActive} active={active} item="About">
//             <div className="flex flex-col space-y-4 text-sm">
//               {AboutItems.map((item, index) => (
//                 <HoveredLink key={index} href={item.href}>{item.label}</HoveredLink>
//               ))}
//             </div>
//           </MenuItem>

//           <NavLink href="/gallery">Gallery</NavLink>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-black shadow-lg rounded-lg mt-4 px-4 py-6">
//           <MobileNavLink href="/" setIsOpen={setIsOpen}>Home</MobileNavLink>
//           <MobileNavLink href="/events" setIsOpen={setIsOpen}>Events</MobileNavLink>
//           <MobileNavLink href="/contact" setIsOpen={setIsOpen}>Contact</MobileNavLink>

//           {/* Mobile Dropdowns */}
//           <DropdownItem title="Programs">
//             {navItems.map((item, index) => (
//               <MobileNavLink key={index} href={item.href} setIsOpen={setIsOpen}>
//                 {item.tag}
//               </MobileNavLink>
//             ))}
//           </DropdownItem>

//           <DropdownItem title="Activities">
//             {activities.map((activity, index) => (
//               <MobileNavLink key={index} href={activity.href} setIsOpen={setIsOpen}>
//                 {activity.title}
//               </MobileNavLink>
//             ))}
//           </DropdownItem>

//           <DropdownItem title="About">
//             {AboutItems.map((item, index) => (
//               <MobileNavLink key={index} href={item.href} setIsOpen={setIsOpen}>
//                 {item.label}
//               </MobileNavLink>
//             ))}
//           </DropdownItem>

//           <MobileNavLink href="/gallery" setIsOpen={setIsOpen}>Gallery</MobileNavLink>
//         </div>
//       )}
//     </nav>
//   );
// }

// /* Desktop Nav Links */
// const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
//   <Link href={href} className="text-white dark:text-white hover:text-gray-900">
//     {children}
//   </Link>
// );

// /* Mobile Nav Links */
// const MobileNavLink = ({ href, setIsOpen, children }: { href: string; setIsOpen: any; children: React.ReactNode }) => (
//   <Link href={href} onClick={() => setIsOpen(false)} className="block py-2 text-white dark:text-white text-center">
//     {children}
//   </Link>
// );

// /* Mobile Dropdown */
// const DropdownItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="py-2 border-b border-gray-300 dark:border-gray-700">
//       <button 
//         onClick={() => setIsOpen(!isOpen)} 
//         className="w-full text-left font-bold text-gray-700 dark:text-white flex justify-between items-center"
//       >
//         {title}
//         <span className={`transition-transform transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
//           ▼
//         </span>
//       </button>

//       {/* Dropdown Content */}
//       <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}>
//         <div className="pl-4 mt-2">{children}</div>
//       </div>
//     </div>
//   );
// };


"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-red-600 font-bold text-2xl"
          >
            NEXTNEWS
          </Link>

          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
            className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <Link
                href="/"
                className="cursor-pointer text-red-600 font-bold text-xl pt-4 ps-4"
              >
                NEXTNEWS
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
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
                  className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <button className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-500">
                  Login
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-2 rounded-md">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
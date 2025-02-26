"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AboutItems, activities, navItems } from "@/data";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-end text-gray-600 font-bold pt-20 py-10">
      <Navbar />
    </div>
  );
}

function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-black shadow-md px-6 py-4 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          MMS School
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          <MenuItem setActive={setActive} active={active} item="Programs">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              {navItems.map((item, index) => (
                <ProductItem title={item.tag} href={item.href} src={item.src} description={item.description} key={index} />
              ))}
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Activities">
            <div className="flex flex-col space-y-4 text-sm">
              {activities.map((activity, index) => (
                <HoveredLink href={activity.href} key={index}>{activity.title}</HoveredLink>
              ))}
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              {AboutItems.map((item, index) => (
                <HoveredLink key={index} href={item.href}>{item.label}</HoveredLink>
              ))}
            </div>
          </MenuItem>

          <NavLink href="/gallery">Gallery</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-lg rounded-lg mt-4 px-4 py-6">
          <MobileNavLink href="/" setIsOpen={setIsOpen}>Home</MobileNavLink>
          <MobileNavLink href="/events" setIsOpen={setIsOpen}>Events</MobileNavLink>
          <MobileNavLink href="/contact" setIsOpen={setIsOpen}>Contact</MobileNavLink>

          {/* Mobile Dropdowns */}
          <DropdownItem title="Programs">
            {navItems.map((item, index) => (
              <MobileNavLink key={index} href={item.href} setIsOpen={setIsOpen}>
                {item.tag}
              </MobileNavLink>
            ))}
          </DropdownItem>

          <DropdownItem title="Activities">
            {activities.map((activity, index) => (
              <MobileNavLink key={index} href={activity.href} setIsOpen={setIsOpen}>
                {activity.title}
              </MobileNavLink>
            ))}
          </DropdownItem>

          <DropdownItem title="About">
            {AboutItems.map((item, index) => (
              <MobileNavLink key={index} href={item.href} setIsOpen={setIsOpen}>
                {item.label}
              </MobileNavLink>
            ))}
          </DropdownItem>

          <MobileNavLink href="/gallery" setIsOpen={setIsOpen}>Gallery</MobileNavLink>
        </div>
      )}
    </nav>
  );
}

/* Desktop Nav Links */
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-700 dark:text-white hover:text-gray-900">
    {children}
  </Link>
);

/* Mobile Nav Links */
const MobileNavLink = ({ href, setIsOpen, children }: { href: string; setIsOpen: any; children: React.ReactNode }) => (
  <Link href={href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-white text-center">
    {children}
  </Link>
);

/* Mobile Dropdown */
const DropdownItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2 border-b border-gray-300 dark:border-gray-700">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left font-bold text-gray-700 dark:text-white flex justify-between items-center"
      >
        {title}
        <span className={`transition-transform transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </button>

      {/* Dropdown Content */}
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="pl-4 mt-2">{children}</div>
      </div>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AboutItems, activities, navItems } from "@/data";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-end  text-gray-600 font-bold ">
            <Navbar className="top-2 " />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (

        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
        >
            <Menu setActive={setActive}>



                <Link href={"/"} className="hover:text-gray-950">Home</Link>
                <Link href={"Events"} className="hover:text-gray-950">Events</Link>
                <Link href={"Contact"} className="hover:text-gray-950">Contact</Link>
                
                <MenuItem setActive={setActive} active={active} item="Programs">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4  ">
                        {navItems.map((item, index) => (
                            <ProductItem title={item.tag} href={item.href} src={item.src} description={item.description} key={index} />
                        ))}

                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Activities">
                    <div className="flex flex-col space-y-4 text-sm">
                        {activities.map(((activity, index) => (
                            <HoveredLink href={activity.href} key={index}>{activity.title}</HoveredLink>
                        )))}

                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About">
                    <div className="flex flex-col space-y-4 text-sm">
                        {AboutItems.map((item, index) => (
                            <HoveredLink key={index} href={item.href}>{item.label}</HoveredLink>
                        ))}
                       
                    </div>
                </MenuItem>
                <Link href={"/gallery"} className="hover:text-gray-950">Gallery</Link>
            </Menu>
        </div>
    );
}

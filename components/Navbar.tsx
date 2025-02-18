"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/cn";
import { activities, navItems, AboutItems } from "@/data";
import { div } from "motion/react-client";



export function NavbarDemo() {
    return (
        <div className="relative w-full flex ">
            

            <div className=" items-center justify-center">
                <Navbar className="top-0 bg-gray-200 " />
            </div>
        </div>

    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-0 inset-x-0  z-50  ", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Programmes" >
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        {navItems.map((navItem, i) => (
                            // <HoveredLink key={i} href={navItem.href}>{navItem.tag}</HoveredLink>
                            <ProductItem
                                key={i}
                                title={navItem.tag}
                                href={navItem.href}
                                description={navItem.description}
                            />
                        ))}
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Activities">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        {
                            activities.map((navItems, i) => (
                                navItems.href ? (
                                    <ProductItem
                                        key={i}
                                        title={navItems.title}
                                        href={navItems.href}
                                        description={navItems.description}
                                    />
                                ) : null
                            ))
                        }

                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="About">
                    <div className="flex flex-col space-y-4 text-sm">
                        {
                            AboutItems.map((navItems, i) => (
                                <HoveredLink
                                    href={navItems.href}
                                    key={i}

                                >{navItems.label}</HoveredLink>
                            ))
                        }

                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}


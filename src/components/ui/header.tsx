
import { Button } from "@/components/ui/button";
import {
NavigationMenu,
NavigationMenuContent,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "gatsby";
import { Menu, MoveRight, X } from "lucide-react";
import React from "react";
import { useState } from "react";

export const Header1 = () => {
const navigationItems = [
    {
    title: "Home",
    href: "/",
    description: "",
    },
    {
    title: "Services",
    description: "Managing a small business today is already tough.",
    items: [
        {
        title: "Weddings",
        href: "/wedding",
        },
        {
        title: "Birthdays",
        href: "/birthday",
        },
        {
        title: "More",
        href: "/more",
        },
        {
        title: "Contact us",
        href: "/contact",
        },
    ],
    },
    {
        title: "About Me",
        href: "/aboutme",
        description: "",
        
    }
];

const [isOpen, setOpen] = useState(false);
return (
    <header className="w-full z-40 fixed top-0 left-0 bg-white">
    <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
        <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
            {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                {item.href ? (
                    <>
                    <Link to={item.href}>
                        <Button variant="ghost">{item.title}</Button>
                    </Link>
                    </>
                ) : (
                    <>
                    <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[450px] p-4 bg-white">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                            <p className="text-base">{item.title}</p>
                            <p className="text-muted-foreground text-sm">
                                {item.description}
                            </p>
                            </div>
                            <Button size="sm" className="mt-10">
                            Book a call today
                            </Button>
                        </div>
                        <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                            <Link
                                to={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                            >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                            </Link>
                            ))}
                        </div>
                        </div>
                    </NavigationMenuContent>
                    </>
                )}
                </NavigationMenuItem>
            ))}
            </NavigationMenuList>
        </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
        <p className="font-semibold">Niikole Photography</p>
        </div>
        <div className="flex justify-end w-full gap-4">
        <Button variant="ghost" className="hidden md:inline">
            Book an appointment
        </Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
        <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
        {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-white shadow-md py-4 container gap-8">
            {navigationItems.map((item) => (
                <div key={item.title}>
                <div className="flex flex-col gap-2">
                    {item.href ? (
                    <Link
                        to={item.href}
                        className="flex justify-between items-center"
                    >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                    </Link>
                    ) : (
                    <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                    item.items.map((subItem) => (
                        <Link
                        key={subItem.title}
                        to={subItem.href}
                        className="flex justify-between items-center"
                        >
                        <span className="text-muted-foreground">
                            {subItem.title}
                        </span>
                        <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                    ))}
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    </div>
    </header>
);
};
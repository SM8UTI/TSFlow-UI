"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LayoutDashboard, Component, Settings, ChevronDown } from "lucide-react";

type NavItem = {
    name: string;
    href?: string;
    icon: React.ElementType;
    children?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
    { name: "Getting Started", href: "/", icon: LayoutDashboard },
    {
        name: "Components",
        icon: Component,
        children: [
            { name: "Button", href: "/components/button" },
            { name: "FAQ Layouts", href: "/layouts/faq" },
        ]
    },
];

function NavGroup({ item, currentPath }: { item: NavItem, currentPath: string | null }) {
    const isChildActive = item.children?.some(child => currentPath === child.href);
    const [isOpen, setIsOpen] = useState(isChildActive || false);
    const Icon = item.icon;

    useEffect(() => {
        if (isChildActive) {
            setIsOpen(true);
        }
    }, [isChildActive]);

    if (!item.children) {
        const isActive = currentPath === item.href;
        return (
            <Link
                href={item.href!}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "bg-[#FF4E02]/10 text-[#FF4E02]" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
            >
                <Icon className="w-4 h-4" />
                {item.name}
            </Link>
        );
    }

    return (
        <div className="flex flex-col gap-1">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${isChildActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
            >
                <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    {item.name}
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
                <div className="flex flex-col ml-6 pl-3 border-l border-white/10 gap-1 mt-1">
                    {item.children.map((child) => {
                        const isChildCurrent = currentPath === child.href;
                        return (
                            <Link
                                key={child.name}
                                href={child.href}
                                className={`block w-full px-3 py-2 text-sm rounded-md transition-colors ${isChildCurrent
                                    ? "text-brand-primary bg-brand-primary/10 font-medium"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {child.name}
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 border-r border-white/10 bg-gray-950/50 hidden md:flex flex-col shrink-0 h-screen sticky top-0">
            <div className="h-16 flex items-center px-6 gap-3 border-b border-white/10">
                <Image src="/logo.png" alt="TSFlow Logo" width={32} height={32} className="rounded-md" />
                <span className="text-xl font-bold bg-linear-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                    TSFlow UI
                </span>
            </div>
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navigation.map((item) => (
                    <NavGroup key={item.name} item={item} currentPath={pathname} />
                ))}
            </nav>
            <div className="p-4 border-t border-white/10">
                <div className="px-3 py-2 text-xs text-gray-500">
                    v0.1.0 • Open Source
                </div>
            </div>
        </div>
    );
}

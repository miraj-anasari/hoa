"use client";

import Link from "next/link";
import { ChevronDown, Home, Info, ImageIcon, LifeBuoy, MessageCircle, Phone } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navItems: Array<{ label: string; href: string }> = [];
// const navItems = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Services", href: "#services" },
//   { label: "Blog", href: "#blog" },
//   { label: "Help", href: "#help" },
//   { label: "Contact Us", href: "#contact" },
// ];

export function TopNav() {
  return (
    <div className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-8xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-lg dark:bg-slate-200 dark:text-slate-950">
            HOA
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">HOA Community</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Owner dashboard access</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full px-4 gap-2">
                <Avatar name="Owner Living House 1" className="h-9 w-9" />
                <span className="hidden sm:inline">Hi, Owner-living-House-1</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end" className="w-56">
              <DropdownMenuItem>
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Info className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                Support
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

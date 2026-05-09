"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import {
  DollarSign,
  BarChart3,
  ClipboardList,
  CreditCard,
  FileText,
  Home,
  ShieldCheck,
  Settings,
  User,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";


const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
 
];

const settings = [
  { label: "Change Password", href: "/change-password", icon: ShieldCheck },
  { label: "Logout", href: "/", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const activeIndex = useMemo(() => navigation.findIndex((item) => item.href === pathname), [pathname]);

  return (
    <aside className={collapsed ? "hidden lg:flex fixed inset-y-0 left-0 z-50 w-20 border-r border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95" : "hidden lg:flex fixed inset-y-0 left-0 z-50 w-72 border-r border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95"}>
      <div className="flex h-full flex-col justify-between overflow-hidden">
        <div className="space-y-6 px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-950 text-sm font-semibold text-white shadow dark:bg-slate-200 dark:text-slate-950">
              HOA
            </div>
            {!collapsed && <div>
              <p className="text-sm font-semibold text-slate-950 dark:text-slate-100">HOA Owner UI</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Community control center</p>
            </div>}
          </div>

          <div className="space-y-1">
            {navigation.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeIndex;
              return (
                <Link key={item.href} href={item.href} className={`group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm transition ${isActive ? "bg-slate-950 text-white shadow dark:bg-slate-200 dark:text-slate-950" : "text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"}`}>
                  <Icon className="h-5 w-5" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="space-y-5 px-4 pb-6">
          

          <div className="space-y-2">
            {settings.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white">
                  <Icon className="h-4 w-4" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </div>

          <Button variant="secondary" size="sm" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? "Expand" : "Collapse"}
          </Button>
        </div>
      </div>
    </aside>
  );
}

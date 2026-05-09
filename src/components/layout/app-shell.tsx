"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <Sidebar />
      <div className="lg:pl-[18rem]">
        <TopNav />
        <main className="min-h-[calc(100vh-96px)] bg-slate-50 px-4 py-6 dark:bg-slate-950 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}

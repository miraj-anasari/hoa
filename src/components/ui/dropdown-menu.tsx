"use client";

import { cloneElement, createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DropdownMenuContext = createContext<{
  open: boolean;
  setOpen: (value: boolean) => void;
} | null>(null);

function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <DropdownMenuContext.Provider value={{ open, setOpen }}>{children}</DropdownMenuContext.Provider>
    </div>
  );
}

function DropdownMenuTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  const ctx = useContext(DropdownMenuContext);
  if (!ctx) {
    throw new Error("DropdownMenuTrigger must be used within DropdownMenu");
  }

  const { open, setOpen } = ctx;
  const child = Array.isArray(children) ? children[0] : children;

  if (asChild && child && typeof child === "object" && "props" in child) {
    return cloneElement(child as any, {
      onClick: () => setOpen(!open),
      "aria-expanded": open,
    });
  }

  return (
    <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
      {children}
    </button>
  );
}

function DropdownMenuContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
  side?: string;
  align?: string;
}) {
  const ctx = useContext(DropdownMenuContext);
  if (!ctx) {
    throw new Error("DropdownMenuContent must be used within DropdownMenu");
  }

  const { open } = ctx;

  if (!open) {
    return null;
  }

  return (
    <div
      className={cn(
        "absolute right-0 z-50 mt-2 min-w-[180px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-950",
        className,
      )}
    >
      {children}
    </div>
  );
}

function DropdownMenuItem({
  className,
  children,
  onSelect,
}: {
  className?: string;
  children: React.ReactNode;
  onSelect?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full items-center gap-2 rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
        className,
      )}
    >
      {children}
    </button>
  );
}

function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-slate-200 dark:bg-slate-800" />;
}

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator };

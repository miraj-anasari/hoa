"use client";

import { cloneElement, createContext, useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DialogContext = createContext<{
  open: boolean;
  setOpen: (value: boolean) => void;
} | null>(null);

function Dialog({ open, onOpenChange, children }: { open?: boolean; onOpenChange?: (open: boolean) => void; children: React.ReactNode }) {
  const [internalOpen, setInternalOpen] = useState(open ?? false);

  useEffect(() => {
    if (open !== undefined) {
      setInternalOpen(open);
    }
  }, [open]);

  const setOpen = (value: boolean) => {
    setInternalOpen(value);
    onOpenChange?.(value);
  };

  return <DialogContext.Provider value={{ open: internalOpen, setOpen }}>{children}</DialogContext.Provider>;
}

function DialogTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("DialogTrigger must be used within Dialog");

  const child = Array.isArray(children) ? children[0] : children;

  if (asChild && child && typeof child === "object" && "props" in child) {
    return cloneElement(child as any, {
      onClick: () => ctx.setOpen(true),
    });
  }

  return (
    <button type="button" onClick={() => ctx.setOpen(true)}>
      {children}
    </button>
  );
}

function DialogClose({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("DialogClose must be used within Dialog");

  const child = Array.isArray(children) ? children[0] : children;

  if (asChild && child && typeof child === "object" && "props" in child) {
    return cloneElement(child as any, {
      onClick: () => ctx.setOpen(false),
    });
  }

  return (
    <button type="button" onClick={() => ctx.setOpen(false)}>
      {children}
    </button>
  );
}

function DialogContent({ className, children }: { className?: string; children: React.ReactNode }) {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("DialogContent must be used within Dialog");

  if (!ctx.open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => ctx.setOpen(false)} />
      <div className={cn("relative z-10 w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-glow dark:border-slate-800 dark:bg-slate-950", className)}>
        {children}
      </div>
    </div>
  );
}

function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />;
}

function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", className)} {...props} />;
}

export { Dialog, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter };

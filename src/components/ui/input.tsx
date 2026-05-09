import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<React.ElementRef<"input">, React.ComponentPropsWithoutRef<"input">>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 placeholder:text-slate-400 transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-500 dark:focus:ring-slate-700",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";

export { Input };

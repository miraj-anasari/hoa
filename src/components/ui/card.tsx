import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-glow backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/90",
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export { Card };

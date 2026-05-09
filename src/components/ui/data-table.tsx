import * as React from "react";
import { cn } from "@/lib/utils";

interface DataTableProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const DataTable = React.forwardRef<HTMLDivElement, DataTableProps>(({ className, title, description, children, ...props }, ref) => (
  <section ref={ref} className={cn("space-y-4", className)} {...props}>
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{title}</p>
        {description ? <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p> : null}
      </div>
    </div>
    <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
      {children}
    </div>
  </section>
));

DataTable.displayName = "DataTable";

export { DataTable };

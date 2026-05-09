import { Card } from "@/components/ui/card";
import { dashboardWidgets } from "@/lib/mock-data";

export function DashboardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardWidgets.map((widget) => (
        <Card key={widget.label} className="overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                {widget.label}
              </p>
              <div className={`h-2.5 w-24 rounded-full bg-gradient-to-r ${widget.accent}`} />
            </div>
            <div>
              <p className="text-3xl font-semibold text-slate-950 dark:text-slate-50">{widget.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{widget.change}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { DashboardCards } from "@/components/dashboard-cards";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          title="Welcome to HOA Dashboard"
          description="Monitor community dues, elections, meter readings, permits, and resident services from one modern HOA console."
          actions={<Button variant="default">Create announcement</Button>}
        />

        <DashboardCards />

        <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <Card className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Community snapshot</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Quick insights</h2>
              </div>
              <Button variant="secondary">Download report</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm text-slate-500 dark:text-slate-400">Active requests</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">8</p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm text-slate-500 dark:text-slate-400">In review</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">3</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Board minutes", value: "Latest posted" },
                { label: "Visitor passes", value: "15 active" },
                { label: "Scheduled tours", value: "2 this week" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200/80 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Quick actions</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Jump straight into the most frequent HOA tasks.</p>
            </div>
            <div className="grid gap-3">
              {[
                "Pay HOA dues",
                "Submit permit",
                "Review election ballot",
                "Update meter reading",
              ].map((label) => (
                <Button key={label} variant="outline" className="justify-start">{label}</Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

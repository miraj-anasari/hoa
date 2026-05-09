import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { meterHistory } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";

export default function HouseMeterPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          title="House Meter"
          description="Submit your latest meter reading and review the last few months of usage."
          actions={<Button variant="default">Update reading</Button>}
        />

        <Card className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Current reading</p>
              <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">34,120 kWh</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">Last updated 2 days ago. Keep your readings current for accurate billing.</p>
            </div>
            <form className="space-y-4 rounded-3xl border border-slate-200/80 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="New meter reading" />
                <Input placeholder="Reading date" />
              </div>
              <Button type="submit" className="w-full">Submit reading</Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-950/95 p-6 text-white shadow-lg dark:bg-slate-800/95">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Usage graph</p>
              <div className="mt-6 grid gap-3">
                {meterHistory.map((item) => (
                  <div key={item.month} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>{item.month}</span>
                      <span>{item.usage} kWh</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-lime-400" style={{ width: `${Math.min(100, item.usage)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Expected next billing</p>
              <p className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">$112</p>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

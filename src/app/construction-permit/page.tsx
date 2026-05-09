import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { permits } from "@/lib/mock-data";

export default function ConstructionPermitPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          title="Construction / Repair Permit"
          description="Submit repair requests and review current permit statuses for house construction, landscaping, and upgrades."
          actions={<Button variant="default">Submit permit</Button>}
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {permits.map((permit) => (
            <Card key={permit.id} className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{permit.type}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Owner: {permit.owner}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                  {permit.status}
                </span>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                Permit ID: {permit.id}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

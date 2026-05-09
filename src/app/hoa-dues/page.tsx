import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { duesSummary } from "@/lib/mock-data";

export default function HoaDuesPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          title="HOA Dues"
          description="View billing history, due dates, and pay your HOA fees with a secure payment experience."
          actions={<Button variant="default">Pay with Razorpay</Button>}
        />

        <Card>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left text-sm text-slate-700 dark:text-slate-300">
              <thead className="border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase tracking-[0.18em]">
                <tr>
                  <th className="px-6 py-4">Period</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Due date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {duesSummary.map((item) => (
                  <tr key={item.period}>
                    <td className="px-6 py-5">{item.period}</td>
                    <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">{item.status}</td>
                    <td className="px-6 py-5">{item.amount}</td>
                    <td className="px-6 py-5">{item.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

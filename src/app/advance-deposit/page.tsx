import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { depositHistory } from "@/lib/mock-data";

export default function AdvanceDepositPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          title="Advance Deposit"
          description="Track deposit history and add funds for HOA fees with secure payment flow."
          actions={<Button variant="default">New deposit</Button>}
        />

        <Card>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left text-sm text-slate-700 dark:text-slate-300">
              <thead className="border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase tracking-[0.18em]">
                <tr>
                  <th className="px-6 py-4">Deposit ID</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {depositHistory.map((deposit) => (
                  <tr key={deposit.id}>
                    <td className="px-6 py-5">{deposit.id}</td>
                    <td className="px-6 py-5">{deposit.date}</td>
                    <td className="px-6 py-5">{deposit.amount}</td>
                    <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">{deposit.status}</td>
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

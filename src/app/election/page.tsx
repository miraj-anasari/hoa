import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { electionCandidates } from "@/lib/mock-data";

export default function ElectionPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          title="Election Center"
          description="See candidate details and cast your vote for the upcoming HOA board and liaison positions."
          actions={<Button variant="default">View ballot rules</Button>}
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {electionCandidates.map((candidate) => (
            <Card key={candidate.name} className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{candidate.role}</p>
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{candidate.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Experienced community advocate with a strong track record in resident communications and budget transparency.</p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Current votes</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">{candidate.votes}</p>
                </div>
                <Button variant="secondary">Vote now</Button>
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Election rules</h2>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>• Each household may vote once per election cycle.</li>
              <li>• Ballots are weighted equally across all members.</li>
              <li>• Voting closes at 11:59 PM on the election day.</li>
            </ul>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

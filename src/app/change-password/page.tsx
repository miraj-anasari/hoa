import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChangePasswordPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          title="Change Password"
          description="Update your account password and keep your HOA profile secure."
          actions={<Button variant="default">Security tips</Button>}
        />

        <Card className="max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Password update</p>
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Secure your account</h2>
            </div>
            <div className="grid gap-4">
              <Input type="password" placeholder="Current password" />
              <Input type="password" placeholder="New password" />
              <Input type="password" placeholder="Confirm new password" />
            </div>
            <Button className="w-full">Save password</Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

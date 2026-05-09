import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profileDetails } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          title="Profile"
          description="View and update your resident profile, contact details, and account preferences."
          actions={<Button variant="default">Edit profile</Button>}
        />

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Card className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Resident</p>
              <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">{profileDetails.name}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">Resident since {profileDetails.residentSince}</p>
            </div>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p><span className="font-semibold text-slate-950 dark:text-white">Email:</span> {profileDetails.email}</p>
              <p><span className="font-semibold text-slate-950 dark:text-white">Phone:</span> {profileDetails.phone}</p>
              <p><span className="font-semibold text-slate-950 dark:text-white">Address:</span> {profileDetails.address}</p>
            </div>
          </Card>

          <Card className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Edit your information</h3>
              <div className="grid gap-4">
                <Input defaultValue={profileDetails.name} placeholder="Full name" />
                <Input defaultValue={profileDetails.email} placeholder="Email address" />
                <Input defaultValue={profileDetails.phone} placeholder="Phone number" />
                <Input defaultValue={profileDetails.address} placeholder="Street address" />
              </div>
            </div>
            <Button className="w-full">Save changes</Button>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

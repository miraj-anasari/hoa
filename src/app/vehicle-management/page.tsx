"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { vehicles } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";

export default function VehicleManagementPage() {
  const [open, setOpen] = useState(false);

  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          title="Vehicle Management"
          description="Register new vehicles and review already approved resident vehicles."
          actions={
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="default">Add vehicle</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Register vehicle</p>
                    <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Add a new vehicle</h2>
                  </div>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <Input placeholder="Make (e.g. Toyota)" />
                  <Input placeholder="Model (e.g. Camry)" />
                  <Input placeholder="License plate" />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>
                  <Button type="button">Submit request</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          }
        />

        <div className="grid gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.plate} className="flex items-center justify-between gap-4 p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{vehicle.make} {vehicle.model}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{vehicle.plate}</p>
              </div>
              <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                {vehicle.status}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

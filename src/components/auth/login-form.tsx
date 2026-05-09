"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const router = useRouter();
  const [role, setRole] = useState("Owner");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="email">
          Email address
        </label>
        <Input id="email" type="email" placeholder="owner@hoa-example.com" required />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <label className="font-medium" htmlFor="password">
            Password
          </label>
          <a href="#" className="font-medium text-slate-900 hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-300">
            Forgot password?
          </a>
        </div>
        <Input id="password" type="password" placeholder="Enter your password" required />
      </div>

      <div className="flex flex-col gap-3 rounded-3xl bg-slate-100 p-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>Login as</p>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {[
            { label: "Owner", value: "Owner" },
            { label: "Admin", value: "Admin" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setRole(option.value)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${role === option.value ? "border-slate-950 bg-slate-950 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-950" : "border-slate-200 bg-transparent text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Sign in as {role}
      </Button>
    </form>
  );
}

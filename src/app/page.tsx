import { LoginForm } from "@/components/auth/login-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 px-4 py-10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 rounded-[2rem] border border-slate-200/80 bg-white/90 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900/95 lg:p-14">
        <div className="grid gap-4 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950 text-lg font-semibold text-white shadow-lg dark:bg-slate-200 dark:text-slate-950">
            HOA
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Welcome back</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Login to your HOA dashboard
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              Access dues, community updates, permits, meter readings, and resident services from a modern HOA owner portal.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/90 sm:p-10">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

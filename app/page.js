import Link from "next/link";
import { GraduationCap, Users2, UserRound, ArrowUpRight, ClipboardList, PieChart } from "lucide-react";

const roles = [
  {
    href: "/login/users",
    icon: Users2,
    title: "Staff & admin",
    description: "Enter scores, publish results, and manage classes, subjects and students.",
  },
  {
    href: "/login/students",
    icon: UserRound,
    title: "Students",
    description: "Check your results and school ID as soon as your teacher makes them available.",
  },
];

export default function WelcomePage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left: brand + pitch */}
      <div className="relative flex flex-col justify-between overflow-hidden bg-ink-900 px-8 py-10 text-white sm:px-14 sm:py-14">
        {/* <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl" /> */}
        {/* <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" /> */}

        <div className="relative flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-ink-900">
            <GraduationCap size={22} strokeWidth={2.25} />
          </div>
          <div>
            <p className="font-display text-sm font-semibold">Beida Basic School</p>
            <p className="text-xs text-ink-300">Powered by As Code Elevate</p>
          </div>
        </div>

        <div className="relative mt-16 max-w-md">
          <p className="text-xs font-medium uppercase tracking-wide text-amber-300">Result Manager</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
            Report cards that write themselves.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-200">
            One place for staff to record scores, track attendance and share results, and for
            students to see their standing the moment it&apos;s published.
          </p>
        </div>

        <div className="relative mt-16 grid max-w-md grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <ClipboardList size={18} className="text-amber-300" />
            <p className="mt-3 font-display text-2xl font-semibold">25</p>
            <p className="text-xs text-ink-300">students currently enrolled</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <PieChart size={18} className="text-amber-300" />
            <p className="mt-3 font-display text-2xl font-semibold">6</p>
            <p className="text-xs text-ink-300">classes running this term</p>
          </div>
        </div>
      </div>

      {/* Right: role selection */}
      <div className="flex items-center justify-center bg-paper px-6 py-14 sm:px-14">
        <div className="w-full max-w-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-brand-600">Sign in</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink-900">Who&apos;s logging in?</h2>
          <p className="mt-2 text-sm text-ink-400">Choose your portal to continue.</p>

          <div className="mt-8 flex flex-col gap-4">
            {roles.map((role) => (
              <Link
                key={role.href}
                href={role.href}
                className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <role.icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display font-semibold text-ink-900">{role.title}</p>
                  <p className="mt-1 text-sm text-ink-400">{role.description}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

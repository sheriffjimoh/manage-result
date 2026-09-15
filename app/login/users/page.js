"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import AuthCard from "@/components/layout/AuthCard";
import Field from "@/components/ui/Field";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function UsersLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <AuthCard eyebrow="Staff & admin" title="Welcome back" subtitle="Sign in to manage results, classes and students.">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label="Username" htmlFor="username">
          <Input id="username" name="username" icon={User} placeholder="e.g. admin" required />
        </Field>

        <Field label="Password" htmlFor="password">
          <div className="relative">
            <Input
              id="password"
              name="password"
              icon={Lock}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-300 hover:text-ink-500"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </Field>

        <Button type="submit" className="mt-2 w-full">
          Log in
        </Button>
      </form>
    </AuthCard>
  );
}

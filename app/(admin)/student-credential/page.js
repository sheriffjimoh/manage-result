"use client";

import { useState } from "react";
import { KeyRound, Link as LinkIcon } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Select from "@/components/ui/Select";
import Badge from "@/components/ui/Badge";

const portalLink = "result-manager.ascodeelevate.com";

const credentials = [
  { class: "Basic 1", name: "Saheed", username: "bSabitu", password: "Sabitu345" },
  { class: "Basic 1", name: "Khalid", username: "bKhalid", password: "Khalid567" },
  { class: "Basic 1", name: "Fatima", username: "bHaliru", password: "Haliru456" },
  { class: "Basic 1", name: "Hafsat", username: "bHafsat", password: "Hafsat456" },
  { class: "Basic 2", name: "Hamida", username: "bdDanjuma1", password: "Danjuma4" },
  { class: "Basic 2", name: "Hamid", username: "bdDanjuma2", password: "Danjuma5" },
  { class: "Basic 4", name: "Adam", username: "bAdams1", password: "Adams12" },
  { class: "Basic 4", name: "Abdullahi", username: "bMohammed", password: "Mohammed2" },
];

function CredentialCard({ item }) {
  return (
    <div className="rounded-xl border border-ink-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <Badge tone="brand">{item.class}</Badge>
        <div className="flex items-center gap-1 text-xs text-ink-400">
          <LinkIcon size={12} />
          {portalLink}
        </div>
      </div>
      <p className="mt-3 font-display text-sm font-semibold text-ink-900">{item.name}</p>
      <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="text-xs text-ink-400">Username</p>
          <p className="font-medium text-ink-700">{item.username}</p>
        </div>
        <div>
          <p className="text-xs text-ink-400">Password</p>
          <p className="font-medium text-ink-700">{item.password}</p>
        </div>
      </div>
    </div>
  );
}

export default function StudentCredentialPage() {
  const [year, setYear] = useState("2025/2026");

  return (
    <div>
      <PageHeader
        title="Student credentials"
        subtitle="Login details generated for every student, ready to share with parents."
        action={
          <div className="w-48">
            <Field htmlFor="year">
              <Select id="year" value={year} onChange={(e) => setYear(e.target.value)}>
                <option>2025/2026</option>
                <option>2024/2025</option>
              </Select>
            </Field>
          </div>
        }
      />

      <div className="mb-4 flex items-center gap-2 text-sm text-ink-400">
        <KeyRound size={15} />
        {credentials.length} student accounts for {year}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((item) => (
          <CredentialCard key={item.username} item={item} />
        ))}
      </div>
    </div>
  );
}

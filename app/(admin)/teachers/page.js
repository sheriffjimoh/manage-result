"use client";

import { UserPlus } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Table from "@/components/ui/Table";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { teachers } from "@/lib/mockData";

export default function TeachersPage() {
  const columns = [
    { key: "no", header: "No", width: 48, render: (_r, i) => i + 1 },
    {
      key: "name",
      header: "Name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <Avatar name={row.name} size={32} />
          <span className="font-medium text-ink-900">{row.name}</span>
        </div>
      ),
    },
    { key: "subject", header: "Subject / role" },
    { key: "classAssigned", header: "Class assigned", render: (row) => <Badge tone="brand">{row.classAssigned}</Badge> },
    { key: "gender", header: "Gender" },
  ];

  return (
    <div>
      <PageHeader
        title="Teachers"
        subtitle="Everyone teaching at Beida Basic School this session."
        action={
          <Button as={Link} href="/add-user" icon={UserPlus}>
            Add teacher
          </Button>
        }
      />
      <Table columns={columns} rows={teachers} rowKey="id" />
    </div>
  );
}

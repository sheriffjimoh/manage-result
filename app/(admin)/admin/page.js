"use client";

import { useState } from "react";
import { PenLine, Trash2, UserPlus } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import Link from "next/link";

const initialAdmins = [
  { id: 1, name: "Kifaya Abdulmalik", role: "ADMIN", gender: "Female", addedOn: "25/03/2025, 01:20 pm" },
];

export default function AdminPage() {
  const [admins, setAdmins] = useState(initialAdmins);

  const columns = [
    { key: "no", header: "No", width: 48, render: (_r, i) => i + 1 },
    {
      key: "name",
      header: "Name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <Avatar name={row.name || "?"} size={32} />
          <span className="font-medium text-ink-900">{row.name || "—"}</span>
        </div>
      ),
    },
    { key: "role", header: "Role", render: (row) => <Badge tone="brand">{row.role}</Badge> },
    { key: "gender", header: "Gender", render: (row) => row.gender || "—" },
    { key: "addedOn", header: "Added on" },
    {
      key: "actions",
      header: "Action",
      align: "right",
      render: (row) => (
        <div className="flex justify-end gap-2">
          <Button size="sm" variant="subtle" icon={PenLine}>
            Edit
          </Button>
          <Button
            size="sm"
            variant="danger"
            icon={Trash2}
            onClick={() => setAdmins((prev) => prev.filter((a) => a.id !== row.id))}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="School admin"
        subtitle="Everyone with full access to the admin portal."
        action={
          <Button as={Link} href="/add-user" icon={UserPlus}>
            Add admin
          </Button>
        }
      />
      <Table columns={columns} rows={admins} />
    </div>
  );
}

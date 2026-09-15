"use client";

import { useState, useMemo } from "react";
import { UserPlus } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Select from "@/components/ui/Select";
import Table from "@/components/ui/Table";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { allStudents } from "@/lib/mockData";

export default function StudentsPage() {
  const [classFilter, setClassFilter] = useState("All classes");
  const classes = ["All classes", ...new Set(allStudents.map((s) => s.class))];

  const rows = useMemo(
    () => allStudents.filter((s) => classFilter === "All classes" || s.class === classFilter),
    [classFilter]
  );

  const columns = [
    { key: "no", header: "No", width: 48, render: (_r, i) => i + 1 },
    {
      key: "name",
      header: "Name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <Avatar name={`${row.name} ${row.surname}`} size={32} />
          <span className="font-medium text-ink-900">
            {row.surname} {row.name}
          </span>
        </div>
      ),
    },
    { key: "class", header: "Class", render: (row) => <Badge tone="brand">{row.class}</Badge> },
    { key: "gender", header: "Gender" },
  ];

  return (
    <div>
      <PageHeader
        title="Students"
        subtitle="Every student currently enrolled."
        action={
          <Button as={Link} href="/add-student" icon={UserPlus}>
            Add student
          </Button>
        }
      />

      <Card className="mb-5 max-w-xs">
        <CardBody>
          <Field label="Filter by class" htmlFor="classFilter">
            <Select id="classFilter" value={classFilter} onChange={(e) => setClassFilter(e.target.value)}>
              {classes.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </Select>
          </Field>
        </CardBody>
      </Card>

      <Table columns={columns} rows={rows} />
    </div>
  );
}

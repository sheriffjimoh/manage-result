"use client";

import { useState } from "react";
import { ClipboardCheck } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import { teachers } from "@/lib/mockData";

export default function AssignClassPage() {
  const [assignments, setAssignments] = useState(teachers);
  const [form, setForm] = useState({ teacher: teachers[0].name, class: "Basic 1" });

  function assign() {
    setAssignments((prev) =>
      prev.map((t) => (t.name === form.teacher ? { ...t, classAssigned: form.class } : t))
    );
  }

  const columns = [
    { key: "name", header: "Teacher" },
    { key: "subject", header: "Role" },
    { key: "classAssigned", header: "Class assigned", render: (row) => <Badge tone="brand">{row.classAssigned}</Badge> },
  ];

  return (
    <div>
      <PageHeader title="Assign class" subtitle="Put a teacher in charge of a class for this term." />

      <Card className="mb-5 max-w-2xl">
        <CardBody className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Teacher" htmlFor="teacher">
            <Select id="teacher" value={form.teacher} onChange={(e) => setForm({ ...form, teacher: e.target.value })}>
              {teachers.map((t) => (
                <option key={t.id}>{t.name}</option>
              ))}
            </Select>
          </Field>
          <Field label="Class" htmlFor="class">
            <Select id="class" value={form.class} onChange={(e) => setForm({ ...form, class: e.target.value })}>
              <option>Basic 1</option>
              <option>Basic 2</option>
              <option>Basic 3</option>
              <option>Basic 4</option>
            </Select>
          </Field>
          <div className="sm:col-span-2">
            <Button icon={ClipboardCheck} onClick={assign}>
              Assign class
            </Button>
          </div>
        </CardBody>
      </Card>

      <Table columns={columns} rows={assignments} rowKey="id" />
    </div>
  );
}

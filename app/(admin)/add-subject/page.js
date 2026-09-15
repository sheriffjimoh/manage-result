"use client";

import { useState } from "react";
import { Plus, PenLine, Trash2 } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";

const initialSubjects = [
  "Agricultural Science",
  "Basic Science",
  "Computer Science",
  "English Studies",
  "Mathematics",
  "Social Studies",
];

export default function AddSubjectPage() {
  const [subjects, setSubjects] = useState(initialSubjects);
  const [newSubject, setNewSubject] = useState("");
  const [filters, setFilters] = useState({ year: "2025/2026", class: "BASIC 1", subject: "Agricultural Science" });

  function createSubject() {
    if (!newSubject.trim()) return;
    setSubjects((prev) => [...prev, newSubject.trim()]);
    setNewSubject("");
  }

  function removeSubject(subject) {
    setSubjects((prev) => prev.filter((s) => s !== subject));
  }

  const columns = [
    { key: "subject", header: "Subject name", render: (row) => row.subject },
    {
      key: "actions",
      header: "Action",
      align: "right",
      render: (row) => (
        <div className="flex justify-end gap-2">
          <Button size="sm" variant="subtle" icon={PenLine}>
            Edit
          </Button>
          <Button size="sm" variant="danger" icon={Trash2} onClick={() => removeSubject(row.subject)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Add subject"
        subtitle="Create subjects, then add or remove them from a specific class."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-1 h-fit">
          <CardHeader title="Create a new subject" />
          <CardBody className="flex flex-col gap-4">
            <Field label="Subject name" htmlFor="newSubject">
              <Input
                id="newSubject"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                placeholder="e.g. Fine Art"
              />
            </Field>
            <Button icon={Plus} onClick={createSubject}>
              Create subject
            </Button>
          </CardBody>
        </Card>

        <Card className="lg:col-span-2 h-fit">
          <CardHeader title="Assign to a class" subtitle="Select the year, class and subject to add or remove." />
          <CardBody className="grid gap-4 sm:grid-cols-3">
            <Field label="Academic year" htmlFor="year">
              <Select id="year" value={filters.year} onChange={(e) => setFilters({ ...filters, year: e.target.value })}>
                <option>2025/2026</option>
              </Select>
            </Field>
            <Field label="Class" htmlFor="class">
              <Select id="class" value={filters.class} onChange={(e) => setFilters({ ...filters, class: e.target.value })}>
                <option>BASIC 1</option>
                <option>BASIC 2</option>
              </Select>
            </Field>
            <Field label="Subject" htmlFor="subject">
              <Select id="subject" value={filters.subject} onChange={(e) => setFilters({ ...filters, subject: e.target.value })}>
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </Select>
            </Field>
            <div className="flex gap-2 sm:col-span-3">
              <Button variant="outline">Add to class</Button>
              <Button variant="outline">Remove from class</Button>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-5">
        <p className="mb-3 text-sm text-ink-400">You&apos;ve created {subjects.length} subjects in total.</p>
        <Table columns={columns} rows={subjects.map((s) => ({ id: s, subject: s }))} />
      </div>
    </div>
  );
}

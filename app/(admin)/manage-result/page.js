"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import Table from "@/components/ui/Table";
import Button from "@/components/ui/Button";

const scoreFields = ["ca1", "ca2", "ass", "proj", "exam"];

const initialStudents = [
  { id: 1, surname: "Danjuma", name: "Hamid", ca1: 15, ca2: 18, ass: 9, proj: 9, exam: 38 },
  { id: 2, surname: "Danjuma", name: "Hamida", ca1: 16, ca2: 18, ass: 9, proj: 9, exam: 38 },
];

function ScoreInput({ value, onChange }) {
  return (
    <input
      type="number"
      min={0}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-16 rounded-md border border-ink-200 px-2 py-1 text-center text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
    />
  );
}

export default function ManageResultPage() {
  const [students, setStudents] = useState(initialStudents);
  const [filters, setFilters] = useState({
    year: "2025/2026",
    term: "First Term",
    class: "BASIC 2",
    subject: "Agricultural Science",
  });

  function updateScore(id, field, value) {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  }

  const columns = [
    { key: "no", header: "No", render: (_row, i) => i + 1, width: 48 },
    { key: "surname", header: "Surname" },
    { key: "name", header: "Name" },
    ...scoreFields.map((field) => ({
      key: field,
      header: field.toUpperCase(),
      align: "center",
      render: (row) => (
        <ScoreInput value={row[field]} onChange={(v) => updateScore(row.id, field, v)} />
      ),
    })),
    {
      key: "total",
      header: "Total",
      align: "center",
      render: (row) => (
        <span className="font-semibold text-brand-700">
          {scoreFields.reduce((sum, field) => sum + Number(row[field] || 0), 0)}
        </span>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Manage result"
        subtitle="Select a year, term, class and subject to record scores."
        action={
          <Button icon={Save} onClick={() => alert("Scores saved!")}>
            Update scores
          </Button>
        }
      />

      <Card className="mb-5">
        <CardBody className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Academic year" htmlFor="year">
            <Select id="year" value={filters.year} onChange={(e) => setFilters({ ...filters, year: e.target.value })}>
              <option>2025/2026</option>
              <option>2024/2025</option>
            </Select>
          </Field>
          <Field label="Term" htmlFor="term">
            <Select id="term" value={filters.term} onChange={(e) => setFilters({ ...filters, term: e.target.value })}>
              <option>First Term</option>
              <option>Second Term</option>
              <option>Third Term</option>
            </Select>
          </Field>
          <Field label="Class" htmlFor="class">
            <Select id="class" value={filters.class} onChange={(e) => setFilters({ ...filters, class: e.target.value })}>
              <option>BASIC 1</option>
              <option>BASIC 2</option>
              <option>BASIC 3</option>
            </Select>
          </Field>
          <Field label="Subject" htmlFor="subject">
            <Select id="subject" value={filters.subject} onChange={(e) => setFilters({ ...filters, subject: e.target.value })}>
              <option>Agricultural Science</option>
              <option>English Studies</option>
              <option>Mathematics</option>
            </Select>
          </Field>
        </CardBody>
      </Card>

      <Table columns={columns} rows={students} />
    </div>
  );
}

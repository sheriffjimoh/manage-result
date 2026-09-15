"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Select from "@/components/ui/Select";
import Table from "@/components/ui/Table";
import Switch from "@/components/ui/Switch";
import Button from "@/components/ui/Button";

const initialStudents = [
  { id: 1, surname: "Abdulazeez", name: "Khalid", available: false },
  { id: 2, surname: "Haliru", name: "Fatima", available: false },
  { id: 3, surname: "Muhammad Muazu", name: "Hafsat", available: true },
  { id: 4, surname: "Sabitu Adam", name: "Saheed", available: true },
];

export default function ResultAvailabilityPage() {
  const [students, setStudents] = useState(initialStudents);
  const [filters, setFilters] = useState({ year: "2025/2026", class: "BASIC 1", term: "First Term" });

  function toggle(id) {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, available: !s.available } : s)));
  }

  const columns = [
    { key: "no", header: "No", width: 48, render: (_r, i) => i + 1 },
    { key: "surname", header: "Surname" },
    { key: "name", header: "Name" },
    {
      key: "available",
      header: "Result availability",
      align: "right",
      render: (row) => (
        <Switch
          checked={row.available}
          onChange={() => toggle(row.id)}
          label={row.available ? "Available" : "Not available"}
        />
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Result availability"
        subtitle="Choose which students can view their results right now."
      />

      <Card className="mb-5">
        <CardBody className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Field label="Academic year" htmlFor="year">
            <Select id="year" value={filters.year} onChange={(e) => setFilters({ ...filters, year: e.target.value })}>
              <option>2025/2026</option>
              <option>2024/2025</option>
            </Select>
          </Field>
          <Field label="Class" htmlFor="class">
            <Select id="class" value={filters.class} onChange={(e) => setFilters({ ...filters, class: e.target.value })}>
              <option>BASIC 1</option>
              <option>BASIC 2</option>
            </Select>
          </Field>
          <Field label="Term" htmlFor="term">
            <Select id="term" value={filters.term} onChange={(e) => setFilters({ ...filters, term: e.target.value })}>
              <option>First Term</option>
              <option>Second Term</option>
              <option>Third Term</option>
            </Select>
          </Field>
        </CardBody>
      </Card>

      <Table columns={columns} rows={students} />

      <div className="mt-5 flex justify-end">
        <Button icon={CheckCircle2} onClick={() => alert("Selected results updated!")}>
          Update all selected
        </Button>
      </div>
    </div>
  );
}

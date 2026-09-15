"use client";

import { useState } from "react";
import { BarChart3, Printer, GraduationCap } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Select from "@/components/ui/Select";
import Table from "@/components/ui/Table";
import Button from "@/components/ui/Button";

const subjects = [
  "SOCIAL STUDIES",
  "HOME ECONOMICS",
  "CREATIVE ART",
  "HANDWRITING",
  "PHY & HEALTH ED.",
  "COMPUTER SCIENCE",
  "MATH",
  "BASIC SCI. & TECH.",
  "ENGLISH STUDIES",
  "AGRIC SCIENCE",
];

const students = [
  { id: 1, surname: "Sabitu Adam", name: "Saheed", scores: [87, 93, 84, 82, 97, 90, 94, 89, 95, 91], total: 902, avg: "90.20%" },
  { id: 2, surname: "Haliru", name: "Fatima", scores: [89, 96, 82, 78, 90, 84, 93, 87, 90, 87], total: 876, avg: "87.60%" },
  { id: 3, surname: "Muhammad Muazu", name: "Hafsat", scores: [76, 93, 73, 77, 90, 86, 85, 81, 88, 77], total: 826, avg: "82.60%" },
  { id: 4, surname: "Abdulazeez", name: "Khalid", scores: [77, 73, 70, 51, 73, 71, 60, 69, 83, 67], total: 694, avg: "69.40%" },
].sort((a, b) => b.total - a.total);

export default function StudentPerformancePage() {
  const [showSheet, setShowSheet] = useState(false);
  const [filters, setFilters] = useState({ term: "First Term", year: "2025/2026", class: "BASIC 1" });

  const columns = [
    { key: "no", header: "#", width: 40, render: (_r, i) => i + 1 },
    { key: "surname", header: "Surname" },
    { key: "name", header: "Name" },
    ...subjects.map((subject, index) => ({
      key: subject,
      header: subject,
      align: "center",
      render: (row) => row.scores[index],
    })),
    { key: "total", header: "Total", align: "center" },
    { key: "avg", header: "Avg", align: "center" },
    {
      key: "position",
      header: "Position",
      align: "center",
      render: (_row, i) => i + 1,
    },
  ];

  return (
    <div>
      <PageHeader title="Student performance" subtitle="Generate a class broadsheet across every subject." />

      <Card className="mb-5 no-print">
        <CardBody className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Field label="Term" htmlFor="term">
            <Select id="term" value={filters.term} onChange={(e) => setFilters({ ...filters, term: e.target.value })}>
              <option>First Term</option>
              <option>Second Term</option>
              <option>Third Term</option>
            </Select>
          </Field>
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
        </CardBody>
      </Card>

      <Button icon={BarChart3} onClick={() => setShowSheet(true)} className="no-print">
        Get broadsheet
      </Button>

      {showSheet ? (
        <Card className="print-area mt-6">
          <CardBody>
            <div className="mb-6 flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <GraduationCap size={26} />
              </div>
              <h2 className="mt-3 font-display text-xl font-semibold text-ink-900">Beida Basic School</h2>
              <p className="text-sm italic text-ink-400">Motto: Qualitative education for the future</p>
              <p className="mt-1 text-sm font-medium text-ink-600">
                {filters.class} broadsheet &middot; {filters.term}, {filters.year}
              </p>
            </div>

            <Table columns={columns} rows={students} dense />

            <div className="mt-6 flex justify-end no-print">
              <Button icon={Printer} variant="outline" onClick={() => window.print()}>
                Print
              </Button>
            </div>
          </CardBody>
        </Card>
      ) : null}
    </div>
  );
}

"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Select from "@/components/ui/Select";
import ReportCard from "@/lib/ReportCard";
import { students, subjectScores } from "@/lib/mockData";

export default function ReviewResultPage() {
  const [studentName, setStudentName] = useState(Object.keys(students)[0]);
  const [filters, setFilters] = useState({ year: "2025/2026", class: "Basic 1", term: "First Term" });

  return (
    <div>
      <PageHeader title="Review result" subtitle="Look over a student's full report before it's published." />

      <Card className="mb-5">
        <CardBody className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Academic year" htmlFor="year">
            <Select id="year" value={filters.year} onChange={(e) => setFilters({ ...filters, year: e.target.value })}>
              <option>2025/2026</option>
            </Select>
          </Field>
          <Field label="Class" htmlFor="class">
            <Select id="class" value={filters.class} onChange={(e) => setFilters({ ...filters, class: e.target.value })}>
              <option>Basic 1</option>
            </Select>
          </Field>
          <Field label="Term" htmlFor="term">
            <Select id="term" value={filters.term} onChange={(e) => setFilters({ ...filters, term: e.target.value })}>
              <option>First Term</option>
            </Select>
          </Field>
          <Field label="Student" htmlFor="student">
            <Select id="student" value={studentName} onChange={(e) => setStudentName(e.target.value)}>
              {Object.keys(students).map((name) => (
                <option key={name}>{name}</option>
              ))}
            </Select>
          </Field>
        </CardBody>
      </Card>

      <ReportCard student={students[studentName]} subjects={subjectScores} term={filters.term} />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Printer } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import ReportCard from "@/lib/ReportCard";
import { students, subjectScores } from "@/lib/mockData";

export default function PrintResultPage() {
  const [studentName, setStudentName] = useState(Object.keys(students)[0]);
  const [term, setTerm] = useState("First Term");

  return (
    <div>
      <PageHeader
        title="Print result"
        subtitle="Choose a student's report card and send it to the printer."
        action={
          <Button icon={Printer} onClick={() => window.print()} className="no-print">
            Print
          </Button>
        }
      />

      <Card className="mb-5 no-print">
        <CardBody className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Student" htmlFor="student">
            <Select id="student" value={studentName} onChange={(e) => setStudentName(e.target.value)}>
              {Object.keys(students).map((name) => (
                <option key={name}>{name}</option>
              ))}
            </Select>
          </Field>
          <Field label="Term" htmlFor="term">
            <Select id="term" value={term} onChange={(e) => setTerm(e.target.value)}>
              <option>First Term</option>
              <option>Second Term</option>
              <option>Third Term</option>
            </Select>
          </Field>
        </CardBody>
      </Card>

      <ReportCard student={students[studentName]} subjects={subjectScores} term={term} />
    </div>
  );
}

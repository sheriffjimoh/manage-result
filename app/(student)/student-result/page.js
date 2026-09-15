"use client";

import { useState } from "react";
import { Printer, Lock } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import ReportCard from "@/lib/ReportCard";
import { students, subjectScores } from "@/lib/mockData";

const isAvailable = true;
const loggedInStudentName = Object.keys(students)[0];

export default function StudentResultPage() {
  const [term, setTerm] = useState("First Term");

  return (
    <div>
      <PageHeader
        title="My result"
        subtitle="Your official result, straight from your school."
        action={
          isAvailable ? (
            <Button icon={Printer} variant="outline" onClick={() => window.print()} className="no-print">
              Print
            </Button>
          ) : null
        }
      />

      <Card className="mb-5 max-w-xs no-print">
        <CardBody>
          <Field label="Term" htmlFor="term">
            <Select id="term" value={term} onChange={(e) => setTerm(e.target.value)}>
              <option>First Term</option>
              <option>Second Term</option>
              <option>Third Term</option>
            </Select>
          </Field>
        </CardBody>
      </Card>

      {isAvailable ? (
        <ReportCard student={students[loggedInStudentName]} subjects={subjectScores} term={term} />
      ) : (
        <Card>
          <CardBody className="flex flex-col items-center gap-3 py-14 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Lock size={20} />
            </div>
            <p className="font-medium text-ink-900">Your result isn&apos;t available yet</p>
            <p className="max-w-xs text-sm text-ink-400">
              Your school hasn&apos;t published {term} results. Check back soon.
            </p>
          </CardBody>
        </Card>
      )}
    </div>
  );
}

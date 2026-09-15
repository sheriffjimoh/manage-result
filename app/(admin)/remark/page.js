"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

const ratingOptions = ["Excellent", "Very Good", "Good", "Fair", "Needs improvement"];

const psychomotorSkills = ["Handwriting", "Drawing", "Crafts", "Sports", "Coordination"];
const effectiveTraits = [
  "Punctuality",
  "Attendance",
  "Class Participation",
  "Homework Completion",
  "Behavior",
  "Attentiveness",
  "Teamwork",
  "Leadership",
  "Communication Skills",
];

function defaultRatings(list) {
  return Object.fromEntries(list.map((item) => [item, "Good"]));
}

/** One labeled rating dropdown — reused for every trait in both trait groups. */
function TraitField({ label, value, onChange }) {
  return (
    <Field label={label} htmlFor={label}>
      <Select id={label} value={value} onChange={(e) => onChange(e.target.value)}>
        {ratingOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
    </Field>
  );
}

export default function RemarkPage() {
  const [formTeacher, setFormTeacher] = useState("Ms. Damilola");
  const [formTeacherRemark, setFormTeacherRemark] = useState(
    "Hafsat works collaboratively with others and contributes positively to group tasks."
  );
  const [principalRemark, setPrincipalRemark] = useState("Nice effort! You've made progress.");
  const [psychomotor, setPsychomotor] = useState(defaultRatings(psychomotorSkills));
  const [effective, setEffective] = useState(defaultRatings(effectiveTraits));

  return (
    <div>
      <PageHeader title="Student traits form" subtitle="Record remarks and psychomotor/behavioural ratings." />

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="h-fit lg:col-span-2">
          <CardHeader title="Remarks" />
          <CardBody className="grid gap-5 sm:grid-cols-2">
            <Field label="Form teacher name" htmlFor="formTeacher" className="sm:col-span-2">
              <Input id="formTeacher" value={formTeacher} onChange={(e) => setFormTeacher(e.target.value)} />
            </Field>
            <Field label="Form teacher remarks" htmlFor="formTeacherRemark">
              <Textarea
                id="formTeacherRemark"
                value={formTeacherRemark}
                onChange={(e) => setFormTeacherRemark(e.target.value)}
              />
            </Field>
            <Field label="Principal / head master remarks" htmlFor="principalRemark">
              <Textarea
                id="principalRemark"
                value={principalRemark}
                onChange={(e) => setPrincipalRemark(e.target.value)}
              />
            </Field>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Psychomotor skills" />
          <CardBody className="grid gap-4 sm:grid-cols-2">
            {psychomotorSkills.map((skill) => (
              <TraitField
                key={skill}
                label={skill}
                value={psychomotor[skill]}
                onChange={(value) => setPsychomotor((prev) => ({ ...prev, [skill]: value }))}
              />
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Effective traits" />
          <CardBody className="grid gap-4 sm:grid-cols-2">
            {effectiveTraits.map((trait) => (
              <TraitField
                key={trait}
                label={trait}
                value={effective[trait]}
                onChange={(value) => setEffective((prev) => ({ ...prev, [trait]: value }))}
              />
            ))}
          </CardBody>
        </Card>
      </div>

      <div className="mt-5">
        <Button icon={Save} onClick={() => alert("Traits saved!")}>
          Save traits
        </Button>
      </div>
    </div>
  );
}

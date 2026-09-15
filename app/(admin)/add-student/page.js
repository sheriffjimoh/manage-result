"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

const initialState = {
  surname: "",
  name: "",
  age: "",
  gender: "",
  registrationNumber: "",
  username: "",
  academicYear: "",
  class: "",
  password: "",
};

export default function AddStudentPage() {
  const [form, setForm] = useState(initialState);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div>
      <PageHeader title="Register students" subtitle="Add one student at a time to the school register." />

      <Card className="max-w-4xl">
        <CardBody>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Field label="Surname" htmlFor="surname">
              <Input id="surname" value={form.surname} onChange={(e) => update("surname", e.target.value)} />
            </Field>
            <Field label="Name" htmlFor="name">
              <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} />
            </Field>
            <Field label="Age" htmlFor="age">
              <Input id="age" type="number" min={0} value={form.age} onChange={(e) => update("age", e.target.value)} />
            </Field>

            <Field label="Gender" htmlFor="gender">
              <Select id="gender" value={form.gender} onChange={(e) => update("gender", e.target.value)}>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </Select>
            </Field>
            <Field label="Registration number" htmlFor="registrationNumber">
              <Input
                id="registrationNumber"
                value={form.registrationNumber}
                onChange={(e) => update("registrationNumber", e.target.value)}
              />
            </Field>
            <Field label="Username" htmlFor="username">
              <Input id="username" value={form.username} onChange={(e) => update("username", e.target.value)} />
            </Field>

            <Field label="Academic year" htmlFor="academicYear">
              <Select id="academicYear" value={form.academicYear} onChange={(e) => update("academicYear", e.target.value)}>
                <option value="">Academic year</option>
                <option>2025/2026</option>
                <option>2024/2025</option>
              </Select>
            </Field>
            <Field label="Class" htmlFor="class">
              <Select id="class" value={form.class} onChange={(e) => update("class", e.target.value)}>
                <option value="">Class</option>
                <option>BASIC 1</option>
                <option>BASIC 2</option>
              </Select>
            </Field>
            <Field label="Password" htmlFor="password">
              <Input
                id="password"
                type="password"
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
              />
            </Field>

            <div className="sm:col-span-3">
              <Button type="submit" icon={UserPlus}>
                Register student
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

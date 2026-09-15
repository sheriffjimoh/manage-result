"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

const initialState = { name: "", username: "", gender: "", password: "", confirmPassword: "" };

export default function AddUserPage() {
  const [form, setForm] = useState(initialState);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div>
      <PageHeader title="Register user" subtitle="Give a new staff member access to the admin portal." />

      <Card className="max-w-md">
        <CardBody>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
            <Field label="Name" htmlFor="name">
              <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} />
            </Field>
            <Field label="Username" htmlFor="username">
              <Input id="username" value={form.username} onChange={(e) => update("username", e.target.value)} />
            </Field>
            <Field label="Gender" htmlFor="gender">
              <Select id="gender" value={form.gender} onChange={(e) => update("gender", e.target.value)}>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
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
            <Field label="Confirm password" htmlFor="confirmPassword">
              <Input
                id="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={(e) => update("confirmPassword", e.target.value)}
              />
            </Field>
            <Button type="submit" icon={UserPlus}>
              Register user
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

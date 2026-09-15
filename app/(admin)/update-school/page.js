"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

const initialState = {
  principalName: "",
  headmasterName: "Mrs. Kifaya Abdulmalik",
  address: "P.W Maroko Junction, Kubwa Abuja",
  email: "beida@gmail.com",
  phone: "07032748243, 08069449393",
  motto: "Qualitative Education For The Future",
  currentTerm: "First Term",
  termBegins: "2025-08-09",
  termEnded: "",
};

export default function UpdateSchoolPage() {
  const [form, setForm] = useState(initialState);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div>
      <PageHeader title="Edit school information" subtitle="These details appear on every printed result and student ID." />

      <Card className="max-w-3xl">
        <CardBody>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <Field label="Principal name" htmlFor="principalName">
              <Input
                id="principalName"
                value={form.principalName}
                onChange={(e) => update("principalName", e.target.value)}
                placeholder="Enter principal name"
              />
            </Field>

            <Field label="Headmaster name" htmlFor="headmasterName">
              <Input
                id="headmasterName"
                value={form.headmasterName}
                onChange={(e) => update("headmasterName", e.target.value)}
              />
            </Field>

            <Field label="Address" htmlFor="address" className="sm:col-span-2">
              <Textarea
                id="address"
                rows={2}
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
              />
            </Field>

            <Field label="Contact email" htmlFor="email">
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </Field>

            <Field label="Phone number" htmlFor="phone">
              <Input
                id="phone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </Field>

            <Field label="Motto" htmlFor="motto" className="sm:col-span-2">
              <Input
                id="motto"
                value={form.motto}
                onChange={(e) => update("motto", e.target.value)}
              />
            </Field>

            <Field label="Select current term" htmlFor="currentTerm">
              <Select
                id="currentTerm"
                value={form.currentTerm}
                onChange={(e) => update("currentTerm", e.target.value)}
              >
                <option>First Term</option>
                <option>Second Term</option>
                <option>Third Term</option>
              </Select>
            </Field>

            <div className="grid grid-cols-2 gap-5">
              <Field label="Term begins" htmlFor="termBegins">
                <Input
                  id="termBegins"
                  type="date"
                  value={form.termBegins}
                  onChange={(e) => update("termBegins", e.target.value)}
                />
              </Field>
              <Field label="Term ended" htmlFor="termEnded">
                <Input
                  id="termEnded"
                  type="date"
                  value={form.termEnded}
                  onChange={(e) => update("termEnded", e.target.value)}
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Button type="submit" icon={Save}>
                Save changes
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

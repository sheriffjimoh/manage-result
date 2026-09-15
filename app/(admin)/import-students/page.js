"use client";

import { Download, UploadCloud } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import FileDrop from "@/components/ui/FileDrop";
import Button from "@/components/ui/Button";

export default function ImportStudentsPage() {
  return (
    <div>
      <PageHeader
        title="Import students"
        subtitle="Already have all your students in a spreadsheet? Add them all in one go."
      />

      <Card className="max-w-2xl">
        <CardBody className="flex flex-col gap-5">
          <FileDrop hint="Accepts .xlsx, .xls or .csv, using our student import template." />
          <div className="flex flex-wrap items-center gap-3">
            <Button icon={UploadCloud}>Import students</Button>
            <Button variant="outline" icon={Download}>
              Download template
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

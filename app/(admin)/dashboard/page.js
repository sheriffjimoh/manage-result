import { Users, GraduationCap, UserCheck, School, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/ui/StatCard";
import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import DonutChart from "@/components/charts/DonutChart";

const stats = [
  { label: "Primary students", value: 20, icon: GraduationCap, tone: "brand" },
  { label: "Secondary students", value: 5, icon: School, tone: "amber" },
  { label: "Total students", value: 25, icon: Users, tone: "emerald" },
  { label: "Teachers", value: 1, icon: UserCheck, tone: "ink" },
  { label: "Admins", value: 1, icon: ShieldCheck, tone: "rose" },
];

const studentGender = [
  { name: "Male", value: 12 },
  { name: "Female", value: 13 },
];

const staffGender = [
  { name: "Male", value: 2 },
  { name: "Female", value: 0 },
];

export default function DashboardPage() {
  return (
    <div>
      <PageHeader title="Dashboard" subtitle="A snapshot of Beida Basic School this term." />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader title="Students" subtitle="Split by gender, all classes" />
          <CardBody>
            <DonutChart data={studentGender} centerLabel="students" />
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Staff" subtitle="Teachers and admins" />
          <CardBody>
            <DonutChart data={staffGender} colors={["#f2a93b", "#5f45d1"]} centerLabel="staff" />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

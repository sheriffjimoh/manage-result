import PageHeader from "@/components/ui/PageHeader";
import StudentIdCard from "@/lib/StudentIdCard";

const loggedInStudent = {
  name: "Adebiyi Jamal",
  registrationNumber: "—",
  level: "K.G 1",
  gender: "Male",
  age: 2,
  academicYear: "2025/2026",
};

export default function StudentDashboardPage() {
  return (
    <div>
      <PageHeader title="My dashboard" subtitle="Your school ID at a glance." />
      <StudentIdCard student={loggedInStudent} />
    </div>
  );
}

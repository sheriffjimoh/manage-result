import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const tasks = [
  { id: 1, label: "Bring signed report card acknowledgement slip", due: "Mon, 22 Sep", done: false },
  { id: 2, label: "Complete Mathematics take-home assignment", due: "Wed, 24 Sep", done: false },
  { id: 3, label: "Return library book", due: "Fri, 19 Sep", done: true },
];

export default function StudentTaskPage() {
  return (
    <div>
      <PageHeader title="My tasks" subtitle="Things your teacher wants you to do." />

      <Card>
        <CardBody className="flex flex-col gap-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-ink-100 px-4 py-3"
            >
              <div>
                <p className={task.done ? "text-sm text-ink-300 line-through" : "text-sm font-medium text-ink-900"}>
                  {task.label}
                </p>
                <p className="mt-0.5 text-xs text-ink-400">Due {task.due}</p>
              </div>
              <Badge tone={task.done ? "success" : "amber"}>{task.done ? "Done" : "Pending"}</Badge>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

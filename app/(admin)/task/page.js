"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const initialTasks = [
  { id: 1, label: "Upload First Term scores for Basic 2", done: true },
  { id: 2, label: "Publish Basic 1 results", done: false },
  { id: 3, label: "Collect form teacher remarks", done: false },
  { id: 4, label: "Print broadsheets for the head of school", done: false },
];

export default function TaskPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [label, setLabel] = useState("");

  function addTask() {
    if (!label.trim()) return;
    setTasks((prev) => [...prev, { id: Date.now(), label: label.trim(), done: false }]);
    setLabel("");
  }

  function toggle(id) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function remove(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <div>
      <PageHeader
        title="Task"
        subtitle="Keep track of what still needs doing this term."
        action={<Badge tone={remaining ? "amber" : "success"}>{remaining} pending</Badge>}
      />

      <Card className="max-w-2xl">
        <CardBody>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTask();
            }}
            className="mb-5 flex gap-2"
          >
            <Input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Add a task..." />
            <Button type="submit" icon={Plus}>
              Add
            </Button>
          </form>

          <ul className="flex flex-col gap-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center gap-3 rounded-xl border border-ink-100 px-4 py-3 hover:border-brand-200"
              >
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggle(task.id)}
                  className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-300"
                />
                <span className={task.done ? "flex-1 text-sm text-ink-300 line-through" : "flex-1 text-sm text-ink-700"}>
                  {task.label}
                </span>
                <button onClick={() => remove(task.id)} className="text-ink-300 hover:text-rose-500">
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}

"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DEFAULT_COLORS = ["#5f45d1", "#f2a93b", "#12866f", "#e05a53"];

/**
 * data: [{ name: "Male", value: 12 }, { name: "Female", value: 13 }]
 */
export default function DonutChart({ data, colors = DEFAULT_COLORS, height = 220, centerLabel }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div style={{ height }} className="relative w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="62%"
            outerRadius="90%"
            paddingAngle={2}
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value} (${total ? ((value / total) * 100).toFixed(0) : 0}%)`, name]}
            contentStyle={{ borderRadius: 10, border: "1px solid #e5e7ef", fontSize: 13 }}
          />
          <Legend verticalAlign="bottom" iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
      {centerLabel ? (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pb-8">
          <span className="font-display text-xl font-semibold text-ink-900">{total}</span>
          <span className="text-xs text-ink-400">{centerLabel}</span>
        </div>
      ) : null}
    </div>
  );
}

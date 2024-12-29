"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  date: string;
  hours: number;
  text: string;
}

export default function CodingChart({ data }: { data: ChartData[] }) {
  return (
    <div className="h-[500px] w-full rounded-lg bg-gray-800 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 40, right: 40, bottom: 20, left: 40 }}
        >
          <defs>
            <text
              id="codingChartTitle"
              x="50%"
              y={15}
              textAnchor="middle"
              className="fill-gray-200 text-lg font-medium"
            >
              Coding Activity (Last 30 Days)
            </text>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="date"
            stroke="#9CA3AF"
            tick={{ fill: "#9CA3AF" }}
            height={50}
          />
          <YAxis
            stroke="#9CA3AF"
            tick={{ fill: "#9CA3AF" }}
            label={{
              value: "Hours",
              angle: -90,
              position: "insideLeft",
              fill: "#9CA3AF",
            }}
            width={50}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "none",
              borderRadius: "0.5rem",
              color: "#E5E7EB",
            }}
            labelStyle={{ color: "#F3F4F6" }}
            formatter={(value: number) => [
              `${value.toFixed(2)} hours`,
              "Coding Time",
            ]}
          />
          <Area
            type="monotone"
            dataKey="hours"
            stroke="#5DE4C7"
            fill="#5DE4C7"
            fillOpacity={0.2}
          />
          <use href="#codingChartTitle" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

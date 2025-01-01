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
    <div className="h-[30vh] w-full rounded-lg bg-gray-800">
      <h2 className="mb-4 text-center text-lg font-medium text-gray-200">
        Coding Activity (Last 30 Days)
      </h2>
      <div className="h-[calc(100%-2rem)]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 40, bottom: 20, left: 40 }}
          >
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
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

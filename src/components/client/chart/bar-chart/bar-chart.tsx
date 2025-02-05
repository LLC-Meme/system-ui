"use client";

import React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  XAxis,
} from "recharts";

export type BarChartDataItem = {
  name: string | number | Date;
  [key: string]: number | string | null | undefined | Date;
};
export type BarChartData = BarChartDataItem[];

export interface BarChartProps {
  className?: string;
  data: BarChartData;
  hasXAxis?: boolean;
  hasYAxis?: boolean;
}

export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  ({ className, data, hasXAxis = true, hasYAxis = true }, ref) => {
    return (
      <div ref={ref} className={className}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data}>
            <CartesianGrid
              vertical={false}
              strokeWidth={1}
              stroke="var(--border)"
            />
            <XAxis
              hide={!hasXAxis}
              dataKey="name"
              axisLine={false}
              tickLine={false}
              stroke="var(--foreground-muted)"
            />
            <YAxis
              hide={!hasYAxis}
              axisLine={false}
              tickLine={false}
              stroke="var(--foreground-muted)"
            />
            <Bar dataKey="value1" fill="#8884d8" radius={[8, 8, 0, 0]} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    );
  },
);
BarChart.displayName = "BarChart";

export default BarChart;

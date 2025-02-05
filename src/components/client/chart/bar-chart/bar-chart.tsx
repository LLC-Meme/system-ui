"use client";

import React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export type BarChartDataItem = {
  name: string | number | Date;
  [key: string]: number | string | null | undefined | Date;
};
export type BarChartData = BarChartDataItem[];

export interface BarChartProps {
  className?: string;
  data: BarChartData;
}

export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  ({ className, data }, ref) => {
    return (
      <div ref={ref} className={className}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data}>
            <CartesianGrid
              vertical={false}
              strokeWidth={1}
              stroke="var(--border)"
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

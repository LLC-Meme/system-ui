"use client";

import React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
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
            <Bar dataKey="value1" fill="#8884d8" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    );
  },
);
BarChart.displayName = "BarChart";

export default BarChart;

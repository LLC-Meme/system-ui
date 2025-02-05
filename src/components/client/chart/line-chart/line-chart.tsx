"use client";

import React from "react";
import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { type Color } from "../../../../types";

export type LineChartDataItem = {
  name: string;
  [key: string]: number | string;
};
export type LineChartData = LineChartDataItem[];

export interface LineChartProps {
  data: LineChartData;
  className?: string;
  color?: Color;
}

const colorMap = {
  red: "alert",
  orange: "warning",
  yellow: "yellow",
  green: "success",
  mint: "mint",
  teal: "teal",
  cyan: "cyan",
  blue: "info",
  indigo: "indigo",
  purple: "purple",
  pink: "pink",
  brown: "brown",
};

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  ({ data, className, color = "blue" }, ref) => {
    return (
      <div className={className} ref={ref}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data} width={400} height={400}>
            <CartesianGrid strokeDasharray="2 2" stroke="var(--border)" />
            <Line
              type="linear"
              dataKey="value"
              stroke={`var(--${colorMap[color]})`}
              dot={false}
              strokeWidth={2}
              activeDot={{
                fill: `var(--${colorMap[color]})`,
                r: 4,
                strokeWidth: 0,
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                fontSize: "var(--text-sm)",
              }}
              cursor={{
                stroke: "var(--border)",
                strokeWidth: 1,
              }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    );
  },
);
LineChart.displayName = "LineChart";

export default LineChart;

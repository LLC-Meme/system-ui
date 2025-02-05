"use client";

import React from "react";
import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
} from "recharts";
import { type Color } from "../../../../types";

export type LineChartData = {
  name: string;
  value: number;
}[];

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
            <Line
              type="linear"
              dataKey="value"
              stroke={`var(--${colorMap[color]})`}
              dot={false}
              strokeWidth={2}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    );
  },
);
LineChart.displayName = "LineChart";

export default LineChart;

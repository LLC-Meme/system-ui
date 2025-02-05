"use client";

import React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  ResponsiveContainer,
  Cell,
} from "recharts";
// import { type Color } from "../../../../types";
import { colorMap, colorOrders } from "../colors";

export interface PieChartDataItem {
  name: string;
  value: number;
}

export type PieChartData = PieChartDataItem[];

export interface PieChartProps {
  className?: string;
  data: PieChartData;
}

const PieChart = React.forwardRef<HTMLDivElement, PieChartProps>(
  ({ className, data }, ref) => {
    return (
      <div ref={ref} className={className}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              className="outline-none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`var(--${colorMap[colorOrders[index % colorOrders.length]]})`}
                  strokeWidth={0}
                />
              ))}
            </Pie>
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    );
  },
);
PieChart.displayName = "PieChart";

export default PieChart;

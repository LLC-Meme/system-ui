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
import HStack from "../../../server/stack/h-stack";

export type LineChartDataItem = {
  name: string;
  [key: string]: number | string;
};
export type LineChartData = LineChartDataItem[];

export interface LineChartProps {
  data: LineChartData;
  className?: string;
  color?: Color;
  dataKey: string | string[];
}

interface LineChartTooltipPayload {
  dataKey: string;
  value: number | string;
  name: string;
  payload: LineChartDataItem;
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

const colorOrders: (keyof typeof colorMap)[] = [
  "blue",
  "green",
  "red",
  "purple",
  "yellow",
  "teal",
  "pink",
  "mint",
  "orange",
  "cyan",
  "indigo",
  "brown",
] satisfies Color[];

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  ({ data, className, dataKey }, ref) => {
    const keys = typeof dataKey === "string" ? [dataKey] : dataKey;

    const keyToColor: Record<string, keyof typeof colorMap> = {};
    keys.forEach((key, index) => {
      keyToColor[key] = colorOrders[index] || colorOrders[0];
    });

    const CustomTooltip = ({
      active,
      payload,
    }: {
      active?: boolean;
      payload?: LineChartTooltipPayload[];
    }) => {
      if (!active || !payload || payload.length === 0) return null;
      const dataItem = payload[0].payload;
      return (
        <div className="p-2 bg-surface rounded-lg border border-border text-sm">
          <div className="font-bold mb-1">{dataItem.name}</div>
          {payload.map((entry) => (
            <HStack key={entry.dataKey} className="items-center">
              <div
                className="w-3 h-3 rounded-sm mr-1"
                style={{
                  backgroundColor: `var(--${colorMap[keyToColor[entry.dataKey]]})`,
                }}
              />
              <div className="text-foreground-muted min-w-16">
                {entry.dataKey}
              </div>
              <div className="font-semibold">{entry.value}</div>
            </HStack>
          ))}
        </div>
      );
    };

    return (
      <div className={className} ref={ref}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data} width={400} height={400}>
            <CartesianGrid strokeDasharray="2 2" stroke="var(--border)" />
            {keys.map((key) => (
              <Line
                key={key}
                type="linear"
                dataKey={key}
                stroke={`var(--${colorMap[keyToColor[key]]})`}
                dot={false}
                strokeWidth={2}
                activeDot={{
                  fill: `var(--${colorMap[keyToColor[key]]})`,
                  r: 4,
                  strokeWidth: 0,
                }}
              />
            ))}
            <Tooltip
              content={<CustomTooltip />}
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

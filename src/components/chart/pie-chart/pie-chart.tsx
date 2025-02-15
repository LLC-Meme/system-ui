"use client";

import React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import HStack from "../../util/stack/h-stack";
import { colorMap, colorOrders } from "../utils";

export interface PieChartDataItem {
  /** 名前 */
  name: string;
  /** 値 */
  value: number;
}

export type PieChartData = PieChartDataItem[];

export interface PieChartProps {
  /** クラス名 */
  className?: string;
  /** データ */
  data: PieChartData;
  /** legendを表示するか */
  hasLegend?: boolean;
}

interface CustomTooltipPayloadItem {
  value: number;
  name: string;
  payload: PieChartDataItem;
}

/**
 * 円グラフコンポーネント
 * @param {PieChartData} data データ
 * @param {boolean} hasLegend legendを表示するか
 */
const PieChart = React.forwardRef<HTMLDivElement, PieChartProps>(
  ({ className, data, hasLegend = false }, ref) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    interface CustomLegendPayloadItem {
      value: string | number;
    }

    interface CustomLegendProps {
      payload?: CustomLegendPayloadItem[];
    }

    const CustomLegend: React.FC<CustomLegendProps> = ({ payload }) => {
      if (!payload) return null;
      return (
        <HStack className="justify-center space-x-4">
          {payload.map((entry) => {
            const idx = data.findIndex((item) => item.name === entry.value);
            const color =
              idx >= 0
                ? `var(--${colorMap[colorOrders[idx % colorOrders.length]]})`
                : "#000";
            return (
              <HStack key={entry.value} className="items-center space-x-1">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm font-medium">{entry.value}</span>
              </HStack>
            );
          })}
        </HStack>
      );
    };

    const CustomTooltip = ({
      active,
      payload,
    }: {
      active?: boolean;
      payload?: CustomTooltipPayloadItem[];
    }) => {
      if (!active || !payload || payload.length === 0) return null;
      const entry = payload[0];
      const value = entry.value;
      const percentage = ((value / total) * 100).toFixed(0);
      const idx = data.findIndex((item) => item.name === entry.payload.name);
      const color =
        idx >= 0
          ? `var(--${colorMap[colorOrders[idx % colorOrders.length]]})`
          : "#000";
      return (
        <div className="p-2 bg-surface rounded-lg border border-border text-sm">
          <HStack className="items-center">
            <div
              className="w-3 h-3 rounded-sm mr-1"
              style={{ backgroundColor: color }}
            />
            <span className="mr-4 font-medium">{entry.payload.name}</span>
            <span className="font-bold">{percentage}%</span>
            <span className="text-foreground-muted">({value})</span>
          </HStack>
        </div>
      );
    };

    return (
      <div ref={ref} className={className}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              className="outline-none"
              innerRadius={80}
              cornerRadius={8}
              paddingAngle={2}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`var(--${colorMap[colorOrders[index % colorOrders.length]]})`}
                  strokeWidth={2}
                  stroke="transparent"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            {hasLegend && <Legend content={<CustomLegend />} />}
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    );
  },
);
PieChart.displayName = "PieChart";

export default PieChart;

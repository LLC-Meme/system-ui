"use client";

import React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";
import HStack from "../../../server/stack/h-stack";
import { colorMap, colorOrders, formatName, formatTick } from "../utils";

export type BarChartDataItem = {
  /** X軸の値 */
  name: string | number | Date;
  /** データ, キーの値を複数与えることで複数のグラフを表示可能 */
  [key: string]: number | string | null | undefined | Date;
};
export type BarChartData = BarChartDataItem[];

export interface BarChartProps {
  /** クラス名 */
  className?: string;
  /** データ */
  data: BarChartData;
  /** データのキー */
  dataKeys: string[];
  /** X軸の各値を表示するか */
  hasXAxis?: boolean;
  /** Y軸の各値を表示するか */
  hasYAxis?: boolean;
  /** legendを表示するか */
  hasLegend?: boolean;
}

/**
 * 棒グラフコンポーネント
 * @param {string} className クラス名
 * @param {BarChartData} data データ
 * @param {string[]} dataKeys データのキー 表示するデータを指定する
 * @param {boolean} hasXAxis X軸の各値を表示するか
 * @param {boolean} hasYAxis Y軸の各値を表示するか
 * @param {boolean} hasLegend legendを表示するか
 */
export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (
    {
      className,
      data,
      hasXAxis = true,
      hasYAxis = true,
      dataKeys,
      hasLegend = false,
    },
    ref,
  ) => {
    const keys = dataKeys;
    const keyToColor: Record<string, keyof typeof colorMap> = {};
    keys.forEach((key, index) => {
      keyToColor[key] = colorOrders[index] || colorOrders[0];
    });

    interface BarChartTooltipPayloadItem {
      value: number;
      dataKey: string;
      payload: BarChartDataItem;
    }

    const CustomTooltip = ({
      active,
      payload,
    }: {
      active?: boolean;
      payload?: BarChartTooltipPayloadItem[];
    }): React.JSX.Element | null => {
      if (!active || !payload || payload.length === 0) return null;
      const dataItem = payload[0].payload;
      return (
        <div className="px-4 py-2 bg-surface rounded-lg border border-border text-sm">
          <div className="font-bold mb-1">{formatName(dataItem.name)}</div>
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

    interface CustomLegendPayloadItem {
      value: string | number;
    }

    interface CustomLegendProps {
      payload?: CustomLegendPayloadItem[];
      width?: number;
      height?: number;
    }

    const CustomLegend: React.FC<CustomLegendProps> = ({ payload }) => {
      if (!payload) return null;
      return (
        <HStack gap="sm" className="w-full justify-center">
          {payload.map((entry) => {
            const dataKey = String(entry.value);
            const color = `var(--${colorMap[keyToColor[dataKey]]})`;
            return (
              <HStack key={dataKey} className="items-center space-x-1">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm font-medium">{dataKey}</span>
              </HStack>
            );
          })}
        </HStack>
      );
    };

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
              tickFormatter={formatTick}
              stroke="var(--foreground-muted)"
              className="text-sm"
            />
            <YAxis
              hide={!hasYAxis}
              axisLine={false}
              tickLine={false}
              stroke="var(--foreground-muted)"
              className="text-sm"
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "var(--surface-muted2)" }}
            />
            {hasLegend && <Legend content={<CustomLegend />} />}
            {dataKeys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                fill={`var(--${colorMap[colorOrders[index % colorOrders.length]]})`}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    );
  },
);
BarChart.displayName = "BarChart";

export default BarChart;

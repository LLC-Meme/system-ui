"use client";

import React from "react";
import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import HStack from "../../../server/stack/h-stack";
import { colorMap, colorOrders, formatName, formatTick } from "../utils";

export type LineChartDataItem = {
  /** X軸の値 */
  name: string | number | Date;
  /** データ, キーの値を複数与えることで複数のグラフを表示可能 */
  [key: string]: number | string | null | undefined | Date;
};
export type LineChartData = LineChartDataItem[];

export interface LineChartProps {
  /** データ */
  data: LineChartData;
  /** クラス名 */
  className?: string;
  /** データのキー */
  dataKeys: string[];
  /** X軸の各値を表示するか */
  hasXAxis?: boolean;
  /** Y軸の各値を表示するか */
  hasYAxis?: boolean;
  /** legendを表示するか */
  hasLegend?: boolean;
}

interface LineChartTooltipPayload {
  dataKey: string;
  value: number | string;
  name: string;
  payload: LineChartDataItem;
}

/**
 * 折れ線グラフコンポーネント
 * @param {LineChartData} data データ
 * @param {string[]} dataKeys データのキー 表示するデータを指定する
 * @param {boolean} hasYAxis Y軸の各値を表示するか
 * @param {boolean} hasXAxis X軸の各値を表示するか
 * @param {boolean} hasLegend legendを表示するか
 */
const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data,
      className,
      dataKeys,
      hasYAxis = true,
      hasXAxis = true,
      hasLegend = false,
    },
    ref,
  ) => {
    const keys = dataKeys;

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
      <div className={className} ref={ref}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data} width={400} height={400}>
            <CartesianGrid strokeDasharray="2 2" stroke="var(--border)" />
            <YAxis
              hide={!hasYAxis}
              stroke="var(--foreground-muted)"
              tickLine={false}
              axisLine={false}
              className="text-sm"
            />
            <XAxis
              hide={!hasXAxis}
              stroke="var(--foreground-muted)"
              dataKey="name"
              tickFormatter={formatTick}
              tickLine={false}
              axisLine={false}
              className="text-sm"
            />
            {hasLegend && <Legend content={<CustomLegend />} />}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "var(--border)",
                strokeWidth: 2,
              }}
            />
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
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    );
  },
);
LineChart.displayName = "LineChart";

export default LineChart;

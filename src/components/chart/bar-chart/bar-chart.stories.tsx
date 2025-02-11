import React from "react";
import { type Meta, StoryObj } from "@storybook/react";
import BarChart from "./bar-chart";

const dummy = [
  { name: 1, value1: 400, value2: 100, value3: 300 },
  { name: 2, value1: 300, value2: 193, value3: 240 },
  { name: 3, value1: 300, value2: 325, value3: 190 },
  { name: 4, value1: 200, value2: 51, value3: 60 },
  { name: 5, value1: 278, value2: 19, value3: 360 },
  { name: 6, value1: 189, value2: 139, value3: 10 },
  { name: 7, value1: 0, value2: 327, value3: 320 },
  { name: 8, value1: 42, value2: 12, value3: 120 },
];

function BarChartExample() {
  return (
    <BarChart
      data={dummy}
      className="w-[800px] h-80"
      dataKeys={["value1", "value2", "value3"]}
      hasLegend
    />
  );
}

const meta = {
  title: "Chart/Bar",
  component: BarChartExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BarChartExample>;

export default meta;
type Story = StoryObj<typeof BarChartExample>;

export const Example: Story = {
  args: {},
};

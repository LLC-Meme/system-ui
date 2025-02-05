import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import LineChart from "./line-chart";

const dummy = [
  { name: "1", value1: 400, value2: 100 },
  { name: "2", value1: 300, value2: 193 },
  { name: "3", value1: 300, value2: 325 },
  { name: "4", value1: 200, value2: 51 },
  { name: "5", value1: 278, value2: 19 },
  { name: "6", value1: 189, value2: 139 },
  { name: "7", value1: 0, value2: 327 },
  { name: "8", value1: 42, value2: 12 },
];

function LineChartExample() {
  return (
    <LineChart
      className="w-[800px] h-80"
      data={dummy}
      dataKey={["value1", "value2"]}
    />
  );
}

const meta = {
  title: "Chart/Line",
  component: LineChartExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LineChartExample>;

export default meta;
type Story = StoryObj<typeof LineChartExample>;

export const Example: Story = {
  args: {},
};

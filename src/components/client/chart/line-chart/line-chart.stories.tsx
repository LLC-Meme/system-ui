import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import LineChart from "./line-chart";

const dummy = [
  { name: "1", value: 400 },
  { name: "2", value: 300 },
  { name: "3", value: 300 },
  { name: "4", value: 200 },
  { name: "5", value: 278 },
  { name: "6", value: 189 },
  { name: "7", value: 0 },
];

function LineChartExample() {
  return (
    <LineChart
      className="w-[640px] h-64"
      data={dummy}
      color="blue"
      dataKey="value"
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

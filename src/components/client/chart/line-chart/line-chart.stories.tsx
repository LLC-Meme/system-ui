import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import LineChart from "./line-chart";

const dummy = [
  { name: "America", value: 400 },
  { name: "Brazil", value: 300 },
  { name: "Canada", value: 300 },
  { name: "Denmark", value: 200 },
  { name: "Egypt", value: 278 },
  { name: "Finland", value: 189 },
  { name: "Germany", value: 0 },
];

function LineChartExample() {
  return <LineChart className="w-[640px] h-64" data={dummy} color="blue" />;
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

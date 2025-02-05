import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PieChart from "./pie-chart";

const dummy = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 200 },
];

function PieChartExample() {
  return <PieChart data={dummy} className="w-[800px] h-80" hasLegend />;
}

const meta = {
  title: "Chart/Pie",
  component: PieChartExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof PieChartExample>;

export default meta;

type Story = StoryObj<typeof PieChartExample>;

export const Example: Story = {
  args: {},
};

import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import LineChart from "./line-chart";

// create a date object from 2024-01-01 to 2024-01-08
const date1 = new Date("2024-01-01");
const date2 = new Date("2024-01-02");
const date3 = new Date("2024-01-03");
const date4 = new Date("2024-01-04");
const date5 = new Date("2024-01-05");
const date6 = new Date("2024-01-06");
const date7 = new Date("2024-01-07");
const date8 = new Date("2024-01-08");

const dummy = [
  { name: date1, value1: 400, value2: 100, value3: 300 },
  { name: date2, value1: 300, value2: 193, value3: 240 },
  { name: date3, value1: 300, value2: 325, value3: 190 },
  { name: date4, value1: 200, value2: 51, value3: 60 },
  { name: date5, value1: 278, value2: 19, value3: 360 },
  { name: date6, value1: 189, value2: 139, value3: 10 },
  { name: date7, value1: 0, value2: 327, value3: 320 },
  { name: date8, value1: 42, value2: 12, value3: 120 },
];

function LineChartExample() {
  return (
    <LineChart
      className="w-[800px] h-80"
      data={dummy}
      dataKeys={["value1", "value2", "value3"]}
      hasLegend
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

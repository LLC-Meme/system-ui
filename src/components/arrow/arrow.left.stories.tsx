import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Arrow from "./arrow";


/**
 * 左向きの矢印を表示します。
 */
const meta = {
  title: "Arrow/Left",
  component: Arrow.Left,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "SVG要素への参照",
      table: {
        type: { summary: "React.Ref<SVGSVGElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Arrow.Left>;

export default meta;
type Story = StoryObj<typeof Arrow.Left>;

export const Left: Story = {
  render: (args) => (
    <Arrow.Left
      className="fill-info w-4 h-4"
      {...args}
    />
  ),
};

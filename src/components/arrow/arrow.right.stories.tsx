import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Arrow from "./arrow";


/**
 * 右向きの矢印を表示します。
 */
const meta = {
  title: "Arrow/Right",
  component: Arrow.Right,
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
} satisfies Meta<typeof Arrow.Right>;

export default meta;

export const Right: StoryObj<typeof Arrow.Right> = {
  render: (args) => (
    <Arrow.Right
      className="fill-info w-4 h-4"
      {...args}
    />
  ),
};
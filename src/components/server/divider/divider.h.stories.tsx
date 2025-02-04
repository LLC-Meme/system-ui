import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HDivider } from "./divider";

/**
 * 水平方向の直線を表示するコンポーネントです。
 * thicknessによって太さを変更できます。
 */
const meta = {
  title: "UI/Divider/H",
  component: HDivider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    thickness: {
      description: "スペーサーの幅",
      table: {
        type: { summary: "1 | 2 | 3" },
        defaultValue: { summary: "1" },
      },
      control: {
        type: "select",
        options: [1, 2, 3],
      },
    },
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HDivider>;

export default meta;
type Story = StoryObj<typeof HDivider>;

export const Example: Story = {
  render: () => (
    <div className="w-40">
      <HDivider />
    </div>
  ),
};

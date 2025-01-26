import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./checkbox";

/**
 * チェックボックスのボックス部分です。
 */
const meta = {
  title: "Form/Checkbox/Box",
  component: Checkbox.Box,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "input要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLInputElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox.Box>;

export default meta;
type Story = StoryObj<typeof Checkbox.Box>;

export const Default: Story = {
  render: (args) => <Checkbox.Box {...args} />,
};

export const Checked: Story = {
  render: (args) => <Checkbox.Box {...args} checked />,
};

export const Unchecked: Story = {
  render: (args) => <Checkbox.Box {...args} checked={false} />,
};

export const Disabled: Story = {
  render: (args) => <Checkbox.Box {...args} disabled />,
};

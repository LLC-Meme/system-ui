import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

/**
 * テキストの入力を受け付ける`input`コンポーネント
 */
const meta = {
  title: "Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "Input要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLInputElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    return <Input placeholder="Default" />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Input disabled placeholder="Default" />;
  },
};

export const Invalid: Story = {
  render: () => {
    return <Input required placeholder="Default" />;
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Arrow, { ArrowProps } from "./arrow";

const meta = {
  title: "Arrow",
  component: Arrow.Left,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Arrow.Left>;

export default meta;
type Story = StoryObj<typeof Arrow.Left>;

export const Left: Story = {
  render: (args) => (
    <Arrow.Left
      {...args}
    />
  ),
};

export const Right: Story = {
  render: (args) => <Arrow.Right {...args} />,
};
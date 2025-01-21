import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./checkbox";

/**
 * チェックボックスのボックス部分です。
 */
const meta = {
  title: "Checkbox/Box",
  component: Checkbox.Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox.Box>;

export default meta;

export const Default: StoryObj<typeof Checkbox.Box> = {
  render: (args) => (
    <Checkbox.Box {...args} />
  ),
};

export const Checked: StoryObj<typeof Checkbox.Box> = {
  render: (args) => (
    <Checkbox.Box {...args} checked />
  ),
};

export const Unchecked: StoryObj<typeof Checkbox.Box> = {
  render: (args) => (
    <Checkbox.Box {...args} checked={false} />
  ),
};

export const Disabled: StoryObj<typeof Checkbox.Box> = {
  render: (args) => (
    <Checkbox.Box {...args} disabled />
  ),
};
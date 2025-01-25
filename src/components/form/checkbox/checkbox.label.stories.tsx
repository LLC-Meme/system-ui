import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./checkbox";

/**
 * チェックボックスをラップする`label`コンポーネントです。
 * `Checkbox.Box`とテキストを用いてチェックボックスを作ります。
 */
const meta = {
  title: "Form/Checkbox/Label",
  component: Checkbox.Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "ラベルに表示するテキスト",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    ref: {
      description: "label要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLLabelElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox.Label>;

export default meta;
type Story = StoryObj<typeof Checkbox.Label>;

export const Label: Story = {
  render: (args) => <Checkbox.Label {...args}>テキスト</Checkbox.Label>,
};

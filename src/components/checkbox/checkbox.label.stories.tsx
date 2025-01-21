import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./checkbox";

/**
 * チェックボックスをラップする`label`コンポーネントです。  
 * `Checkbox.Box`とテキストを用いてチェックボックスを作ります。  
 */
const meta = {
  title: "Checkbox/Label",
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
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox.Label>;

export default meta;

export const Label: StoryObj<typeof Checkbox.Label> = {
  render: (args) => (
    <Checkbox.Label {...args}>
      テキスト
    </Checkbox.Label>
  ),
};
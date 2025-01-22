import type { Meta, StoryObj } from "@storybook/react";
import LabelText from "./label-text";

/**
 * `input`、`select`などフォーム内の各アイテムに対するラベルを表現するコンポーネント。  
 * 
 * <span style="color:red">label要素とは違うので注意してください。</span>  
 */
const meta = {
  title: "Form/LabelText",
  component: LabelText,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "フォームアイテムのラベル",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    className: {
      description: "追加のクラス名",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    ref: {
      description: "span要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLSpanElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LabelText>;

export default meta;
type Story = StoryObj<typeof LabelText>;

export const Example: Story = {
  args: {
    children: "フォームアイテムのラベル",
  },
};
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./dropdown";

/**
 * ドロップダウンの各アイテムのコンポーネントです。  
 * `asChild`が`true`の場合は、適宜リンクコンポーネントを用いてください。  
 * デフォルトでは`<a>`要素でラップされます。
 */
const meta = {
  title: "Dropdown/Item",
  component: Dropdown.Item,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "ドロップダウンコンテンツ要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLAnchorElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "ドロップダウンのアイテム",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    current: {
      description: "現在選択されているアイテムかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    asChild: {
      description: "子要素としてレンダリングするかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown.Item>;

export default meta;
type Story = StoryObj<typeof Dropdown.Item>;

export const Default: Story = {
  args: {
    children: "Dropdown Item",
  },
}

export const Current: Story = {
  args: {
    children: "Current Item",
    current: true,
  },
}
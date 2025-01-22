import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./sidebar";

/**
 * サイドバーのアイテムです。  
 * 
 * `asChild`を`true`にすることで、`Slot`コンポーネントとして使うことができます。  
 */
const meta = {
  title: "Layout/Sidebar/Item",
  component: Sidebar.Item,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLAnchorElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    current: {
      description: "現在のページかどうかを指定します。",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    asChild: {
      description: "Slotコンポーネントとして使う場合に指定します。",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    children: {
      description: "表示するテキスト",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Sidebar.Item>;

export default meta;
type Story = StoryObj<typeof Sidebar.Item>;

export const Default: Story = {
  args: {
    children: "Item",
  },
};

export const Current: Story = {
  args: {
    children: "Item",
    current: true,
  },
};
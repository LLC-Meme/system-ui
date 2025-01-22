import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./pagination";

/**
 * ページネーションアイテムコンポーネントです。  
 * asChildをtrueにすることで、アイテム以外の要素を使うことができます。  
 * 
 * ページのインデックス番号などをラッピングして用いてください。  
 */
const meta = {
  title: "UI/Pagination/Item",
  component: Pagination.Item,
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
    children: {
      description: "テキスト(ページ番号など)",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    current: {
      description: "現在のページかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    asChild: {
      description: "子要素として使うかどうか",
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
} satisfies Meta<typeof Pagination.Item>;

export default meta;
type Story = StoryObj<typeof Pagination.Item>;

export const Default: Story = {
  args: {
    children: "1",
    current: false,
  },
};

export const Current: Story = {
  args: {
    children: "1",
    current: true,
  },
};
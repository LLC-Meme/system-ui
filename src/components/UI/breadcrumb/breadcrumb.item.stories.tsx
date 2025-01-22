import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./breadcrumb";

/**
 * Breadcrumbの各リンクアイテムを表示します。  
 * 適宜`a`や`Link`をラップして用いてください。  
 */
const meta = {
  title: "UI/Breadcrumb/Item",
  component: Breadcrumb.Item,
  parameters: {
    layout: "centered",
  },
  argTypes: {
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
    children: {
      description: "リンクアイテムに表示するテキスト",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb.Item>;

export default meta;
type Story = StoryObj<typeof Breadcrumb.Item>;

export const Default: Story = {
  args: {
    current: false,
    children: "Item",
  },
};

export const Current: Story = {
  args: {
    current: true,
    children: "Item",
  },
};
import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./sidebar";

/**
 * サイドバーの各アイテムをグループ化する際のラッピングに使用します。  
 */
const meta = {
  title: "Sidebar/Group",
  component: Sidebar.Group,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "表示する要素",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Sidebar.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  args: {
    children: "Group",
  },
};
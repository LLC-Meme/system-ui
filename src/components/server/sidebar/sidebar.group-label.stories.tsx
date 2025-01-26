import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./sidebar";

/**
 * サイドバーのグループラベルです。
 */
const meta = {
  title: "Layout/Sidebar/GroupLabel",
  component: Sidebar.GroupLabel,
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
      description: "表示するテキスト",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar.GroupLabel>;

export default meta;
type Story = StoryObj<typeof Sidebar.GroupLabel>;

export const GroupLabel: Story = {
  args: {
    children: "Group Label",
  },
};

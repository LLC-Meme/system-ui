import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./sidebar";

/**
 * サイドバーのコンテナです。
 * 全てのサイドバーの要素はこのコンテナの中に配置します。
 */
const meta = {
  title: "Layout/Sidebar/Container",
  component: Sidebar.Container,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLElement>" },
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
    isOpen: {
      description: "サイドバーが開いているかどうかを指定します。",
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
} satisfies Meta<typeof Sidebar.Container>;

export default meta;
type Story = StoryObj<typeof Sidebar.Container>;

export const Container: Story = {
  args: {
    children: "Container",
    isOpen: true,
  },
};

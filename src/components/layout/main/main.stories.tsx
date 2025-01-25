import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Main from "./main";

const meta = {
  title: "Layout/Main",
  component: Main,
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
      description: "Main内に表示するコンテンツ",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false,
    },
    sidebarOpen: {
      description: "サイドバーが開いているかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof Main>;

export const Example: Story = {
  args: {
    sidebarOpen: false,
    children: <p>Mainコンポーネントのサンプル</p>,
  },
};

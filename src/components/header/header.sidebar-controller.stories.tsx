import type { Meta, StoryObj } from "@storybook/react";
import Header from "./header";

const meta = {
  title: "Header/SidebarController",
  component: Header.SidebarController,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      description: "サイドバーを開くためのハンドラー",
      table: {
        type: { summary: "() => void" },
      },
      control: false
    },
    ref: {
      description: "サイドバーを開くためのボタン要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLButtonElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header.SidebarController>;

export default meta;
type Story = StoryObj<typeof Header.SidebarController>;

export const SidebarController: Story = {
  args: {
    onClick: () => {}
  },
};

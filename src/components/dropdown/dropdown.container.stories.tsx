import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./dropdown";

/**
 * ドロップダウンのコンテナコンポーネントです。  
 * 各ドロップダウンのアイテムをラップします。  
 */
const meta = {
  title: "UI/Dropdown/Container",
  component: Dropdown.Container,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "ドロップダウンコンテナ要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
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
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown.Container>;

export default meta;
type Story = StoryObj<typeof Dropdown.Container>;

export const Container: Story = {
  args: {
    children: "Dropdown Container",
  },
};
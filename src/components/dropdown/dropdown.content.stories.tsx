import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./dropdown";

/**
 * ドロップダウンが開かれた時に表示されるコンポーネントのラッパーです。  
 * `Dropdown.Item`コンポーネントをラップします。  
 */
const meta = {
  title: "Dropdown/Content",
  component: Dropdown.Content,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "ドロップダウンコンテンツ要素への参照",
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
} satisfies Meta<typeof Dropdown.Content>;

export default meta;
type Story = StoryObj<typeof Dropdown.Content>;

export const Content: Story = {
  args: {},
};
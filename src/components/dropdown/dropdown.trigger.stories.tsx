import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./dropdown";

/**
 * ドロップダウンのトリガーコンポーネントです。  
 * ドロップダウンのラベルになります。  
 */
const meta = {
  title: "Dropdown/Trigger",
  component: Dropdown.Trigger,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "ドロップダウントリガー要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "ドロップダウンのトリガーラベル",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown.Trigger>;

export default meta;
type Story = StoryObj<typeof Dropdown.Trigger>;


export const Example: Story = {
  args: {
    children: "Dropdown Trigger",
  },
}
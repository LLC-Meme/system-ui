import type { Meta, StoryObj } from "@storybook/react";
import Collapsible from "./collapsible";

/**
 * ドロップダウンのトリガーコンポーネントです。
 * ドロップダウンのラベルになります。
 */
const meta = {
  title: "UI/Collapsible/Trigger",
  component: Collapsible.Trigger,
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
} satisfies Meta<typeof Collapsible.Trigger>;

export default meta;
type Story = StoryObj<typeof Collapsible.Trigger>;

export const Trigger: Story = {
  args: {
    children: "Collapsible Trigger",
  },
};

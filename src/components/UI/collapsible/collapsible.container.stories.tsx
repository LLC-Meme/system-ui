import type { Meta, StoryObj } from "@storybook/react";
import Collapsible from "./collapsible";

/**
 * ドロップダウンのコンテナコンポーネントです。
 * 各ドロップダウンのアイテムをラップします。
 */
const meta = {
  title: "UI/Collapsible/Container",
  component: Collapsible.Container,
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
} satisfies Meta<typeof Collapsible.Container>;

export default meta;
type Story = StoryObj<typeof Collapsible.Container>;

export const Container: Story = {
  args: {
    children: "Collapsible Container",
  },
};

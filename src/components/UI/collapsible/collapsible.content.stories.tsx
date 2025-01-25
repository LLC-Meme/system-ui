import type { Meta, StoryObj } from "@storybook/react";
import Collapsible from "./collapsible";

/**
 * ドロップダウンが開かれた時に表示されるコンポーネントのラッパーです。
 * `Collapsible.Item`コンポーネントをラップします。
 */
const meta = {
  title: "UI/Collapsible/Content",
  component: Collapsible.Content,
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
} satisfies Meta<typeof Collapsible.Content>;

export default meta;
type Story = StoryObj<typeof Collapsible.Content>;

export const Content: Story = {
  args: {},
};

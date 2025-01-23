import type { Meta, StoryObj } from "@storybook/react";
import Title from "./title";

const meta = {
  title: "UI/Title/Block",
  component: Title.Block,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLHeadingElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "ブロックタイトルに表示するコンテンツ",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Title.Block>;

export default meta;
type Story = StoryObj<typeof Title.Block>;

export const Example: Story = {
  args: {
    children: "ブロックタイトル",
  },
};
import type { Meta, StoryObj } from "@storybook/react";
import BlockTitle from "./block-title";

const meta = {
  title: "UI/Title/Block",
  component: BlockTitle,
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
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BlockTitle>;

export default meta;
type Story = StoryObj<typeof BlockTitle>;

export const Example: Story = {
  args: {
    children: "ブロックタイトル",
  },
};

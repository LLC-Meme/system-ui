import type { Meta, StoryObj } from "@storybook/react";
import Title from "./title";

const meta = {
  title: "UI/Title/Page",
  component: Title.Page,
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
      description: "ページタイトルに表示するコンテンツ",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Title.Page>;

export default meta;
type Story = StoryObj<typeof Title.Page>;

export const Example: Story = {
  args: {
    children: "ページタイトル",
  },
};

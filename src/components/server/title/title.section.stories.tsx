import type { Meta, StoryObj } from "@storybook/react";
import Title from "./title";

const meta = {
  title: "UI/Title/Section",
  component: Title.Section,
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
      description: "セクションタイトルに表示するコンテンツ",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Title.Section>;

export default meta;
type Story = StoryObj<typeof Title.Section>;

export const Example: Story = {
  args: {
    children: "セクションタイトル",
  },
};

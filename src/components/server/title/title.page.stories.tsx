import type { Meta, StoryObj } from "@storybook/react";
import PageTitle from "./page";

const meta = {
  title: "UI/Title/Page",
  component: PageTitle,
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
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof PageTitle>;

export const Example: Story = {
  args: {
    children: "ページタイトル",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import SegmentTitle from "./segment";

const meta = {
  title: "UI/Title/Segment",
  component: SegmentTitle,
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
      description: "セグメントタイトルに表示するコンテンツ",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SegmentTitle>;

export default meta;
type Story = StoryObj<typeof SegmentTitle>;

export const Example: Story = {
  args: {
    children: "セグメントタイトル",
  },
};

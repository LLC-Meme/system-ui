import { Meta, StoryObj } from "@storybook/react";
import { VStack } from "./stack";

/**
 * 垂直方向のスタックをするためのコンポーネントです。
 * gapを指定することでスタックの間隔を調整できます。
 */
const meta = {
  title: "Util/Stack/V",
  component: VStack,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    gap: {
      description: "スタックの間隔",
      table: {
        type: { summary: "none | xs | sm | md | lg | xl" },
        defaultValue: { summary: "none" },
      },
      control: {
        type: "select",
        options: ["none", "xs", "sm", "md", "lg", "xl"],
      },
    },
    children: {
      description: "スタックする要素",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false,
    },
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof VStack>;

export default meta;
type Story = StoryObj<typeof VStack>;

export const Example: Story = {
  args: {
    gap: "md",
  },
};

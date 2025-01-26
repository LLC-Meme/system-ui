import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "./error-message";

const meta = {
  title: "Form/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "DIV要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "エラーメッセージの内容",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Example: Story = {
  args: {
    children: "エラーメッセージ",
  },
};

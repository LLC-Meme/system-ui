import type { Meta, StoryObj } from "@storybook/react";
import Header from "./header";

const meta = {
  title: "Layout/Header/Container",
  component: Header.Container,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "ヘッダーに表示する要素",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    ref: {
      description: "ヘッダー要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header.Container>;

export default meta;
type Story = StoryObj<typeof Header.Container>;

export const Container: Story = {
  args: {
    children: "Header",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./pagination";

/**
 * 全ページネーションアイテムをラップするコンテナコンポーネントです。  
 */
const meta = {
  title: "UI/Pagination/Container",
  component: Pagination.Container,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLAnchorElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "各ページネーションアイテム",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination.Container>;

export default meta;
type Story = StoryObj<typeof Pagination.Container>;

export const Container: Story = {
  args: {},
};

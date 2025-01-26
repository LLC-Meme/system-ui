import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./pagination";

/**
 * ページネーションの省略記号です。
 */
const meta = {
  title: "UI/Pagination/Ellipsis",
  component: Pagination.Ellipsis,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination.Ellipsis>;

export default meta;
type Story = StoryObj<typeof Pagination.Ellipsis>;

export const Ellipsis: Story = {
  args: {},
};

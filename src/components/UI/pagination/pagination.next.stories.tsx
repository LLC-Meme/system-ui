import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./pagination";

/**
 * 次のページへ移動するためのページネーションアイテムコンポーネントです。
 */
const meta = {
  title: "UI/Pagination/Next",
  component: Pagination.Next,
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
    asChild: {
      description: "子要素として使うかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination.Next>;

export default meta;
type Story = StoryObj<typeof Pagination.Next>;

export const Next: Story = {
  args: {},
};

import type { Meta, StoryObj } from "@storybook/react";
import SearchWindow from "./search-window";

/**
 * 検索ウィンドウのコンテナ部分を提供します。  
 */
const meta = {
  title: "SearchWindow/Container",
  component: SearchWindow.Container,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "検索ウィンドウ要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchWindow.Container>;

export default meta;
type Story = StoryObj<typeof SearchWindow.Container>;

export const Default: Story = {
  args: {},
};
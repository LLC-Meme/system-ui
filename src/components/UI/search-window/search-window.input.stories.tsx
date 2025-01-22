import type { Meta, StoryObj } from "@storybook/react";
import SearchWindow from "./search-window";

/**
 * 検索ウィンドウの入力部分を提供します。  
 */
const meta = {
  title: "UI/SearchWindow/Input",
  component: SearchWindow.Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "検索ウィンドウの入力要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLInputElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchWindow.Input>;

export default meta;
type Story = StoryObj<typeof SearchWindow.Input>;

export const Default: Story = {
  args: {},
};
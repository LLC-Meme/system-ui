import type { Meta, StoryObj } from "@storybook/react";
import Selector from "./selector";

/**
 * セレクトボックスの選択肢を提供します。  
 * `Selector.Select`の子要素として使用してください。
 */
const meta = {
  title: "Selector/Option",
  component: Selector.Option,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "セレクト要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLOptionElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Selector.Option>;

export default meta;
type Story = StoryObj<typeof Selector.Option>;

export const Default: Story = {
  args: {},
};
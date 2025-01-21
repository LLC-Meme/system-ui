import type { Meta, StoryObj } from "@storybook/react";
import Selector from "./selector";

/**
 * セレクトボックスを提供します。  
 * `Selector.Option`を子要素として使用してください。
 */
const meta = {
  title: "Selector/Select",
  component: Selector.Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "セレクト要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLSelectElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Selector.Select>;

export default meta;
type Story = StoryObj<typeof Selector.Select>;

export const Example: Story = {
  args: {},
};
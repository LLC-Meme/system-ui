import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./textarea";


/**
 * フォームに用いるテキストエリアのコンポーネントです。  
 */
const meta = {
  title: "Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Example: Story = {
  args: {}
};
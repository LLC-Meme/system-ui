import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./radio";

/**
 * ラジオボタンの`label`要素を提供します。  
 */
const meta = {
  title: "Radio/Label",
  component: Radio.Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "ラジオラベル要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLLabelElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "ラジオボタンとそのラベル",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false,
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio.Label>;

export default meta;
type Story = StoryObj<typeof Radio.Label>;

export const Example: Story = {
  args: {
    children: "ラジオボタン",
  },
};

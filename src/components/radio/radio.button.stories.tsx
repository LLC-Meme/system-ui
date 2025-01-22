import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./radio";

/**
 * ラジオボタンのボタン部分を提供します。  
 */
const meta = {
  title: "Form/Radio/Button",
  component: Radio.Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "ラジオボタン要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLInputElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio.Button>;

export default meta;
type Story = StoryObj<typeof Radio.Button>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
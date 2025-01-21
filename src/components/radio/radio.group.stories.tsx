import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./radio";

/**
 * ラジオボタンのグループを提供します。  
 * 
 * 全`Radio.Label`コンポーネントをラップして用います。  
 */
const meta = {
  title: "Radio/Group",
  component: Radio.Group,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "ラジオグループ要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false
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
} satisfies Meta<typeof Radio.Group>;

export default meta;
type Story = StoryObj<typeof Radio.Group>;

export const Example: Story = {
  args: {},
};

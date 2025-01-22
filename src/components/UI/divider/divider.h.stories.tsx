import { Meta, StoryObj } from "@storybook/react";
import Divider from "./divider";


/**
 * 水平方向の直線を表示するコンポーネントです。  
 * thicknessによって太さを変更できます。  
 */
const meta = {
  title: "UI/Divider/H",
  component: Divider.H,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    thickness: {
      description: "スペーサーの幅",
      table: {
        type: { summary: "1 | 2 | 3" },
        defaultValue: { summary: "1" }
      },
      control: {
        type: "select",
        options: [1, 2, 3]
      }
    },
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Divider.H>;

export default meta;
type Story = StoryObj<typeof Divider.H>;

export const Example: Story = {
  args: {
    thickness: 1
  },
};
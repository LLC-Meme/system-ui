import { Meta, StoryObj } from "@storybook/react";
import Spacer from "./spacer";

/**
 * 水平方向のスペーシングをするためのコンポーネントです。
 * unitによって16px単位で幅を指定できます。
 */
const meta = {
  title: "Util/Spacer/H",
  component: Spacer.H,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    unit: {
      description: "スペーサーの高さ",
      table: {
        type: { summary: "1 | 2 | 3 | 4 | 5 | 6" },
        defaultValue: { summary: "2" },
      },
      control: {
        type: "select",
        options: [1, 2, 3, 4, 5, 6],
      },
    },
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spacer.H>;

export default meta;
type Story = StoryObj<typeof Spacer.H>;

export const Example: Story = {
  args: {
    unit: 4,
  },
};

import { Meta, StoryObj } from "@storybook/react";
import Spacer from "./spacer";


/**
 * 垂直方向のスペーシングをするためのコンポーネントです。  
 * unitによって16px単位で高さを指定できます。  
 */
const meta = {
  title: "Util/Spacer/V",
  component: Spacer.V,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    unit: {
      description: "スペーサーの高さ",
      table: {
        type: { summary: "1 | 2 | 3 | 4 | 5 | 6" },
        defaultValue: { summary: "2" }
      },
      control: {
        type: "select",
        options: [1, 2, 3, 4, 5, 6]
      }
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Spacer.V>;

export default meta;

export const Example: StoryObj<typeof Spacer.V> = {
  args: {
    unit: 4
  },
};
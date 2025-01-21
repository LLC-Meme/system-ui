import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Arrow from "./arrow";


/**
 * 右および左向きの矢印を表示します。  
 * 
 * なお、プレビューとして`fill-info w-4 h-4`のクラスを設定しています。
 * 実際に用いる際には、適切なクラスを設定してください。
 */
const meta = {
  title: "Arrow",
  component: Arrow.Left,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "SVG要素への参照",
      table: {
        type: { summary: "React.Ref<SVGSVGElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Arrow.Left>;

export default meta;

export const Example: StoryObj<typeof Arrow.Left> = {
  render: (args) => (
    <Arrow.Left
      className="fill-info w-4 h-4"
      {...args}
    />
  ),
};
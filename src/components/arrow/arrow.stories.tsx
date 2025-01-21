import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Arrow from "./arrow";


function ArrowExample() {
  return (
    <Arrow.Left
      className="fill-info w-4 h-4"
    />
  );
}

/**
 * 右および左向きの矢印を表示します。  
 * 
 * なお、プレビューとして`fill-info w-4 h-4`のクラスを設定しています。
 * 実際に用いる際には、適切なクラスを設定してください。
 */
const meta = {
  title: "Arrow",
  component: ArrowExample,
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
} satisfies Meta<typeof ArrowExample>;

export default meta;
type Story = StoryObj<typeof ArrowExample>;

export const Example: Story = {
  args: {}
};
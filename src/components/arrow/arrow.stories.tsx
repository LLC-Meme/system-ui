import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Arrow from "./arrow";


/**
 * Arrowコンポーネントは、以下のサブコンポーネントを持ちます。  
 * - Arrow.Left  
 * - Arrow.Right  
 *
 * 各サブコンポーネントは、標準のSVGプロパティを受け入れ、refを転送できます。
 * このStorybookでは、`Arrow.Left`を主要な`component`として設定し、
 * `Arrow.Right`の追加ストーリーを表示します。
 * 
 * なお、各サブコンポーネントのプレビューとして、`fill-info w-4 h-4`のクラスを設定しています。
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

/**
 * Story: Left
 * 左向きの矢印を表示します。
 */
export const Left: StoryObj<typeof Arrow.Left> = {
  render: (args) => (
    <Arrow.Left
      className="fill-info w-4 h-4"
      {...args}
    />
  ),
};

/**
 * Story: Right
 * 右向きの矢印を表示します。
 */
export const Right: StoryObj<typeof Arrow.Right> = {
  render: (args) => (
    <Arrow.Right
      className="fill-info w-4 h-4"
      {...args}
    />
  ),
};
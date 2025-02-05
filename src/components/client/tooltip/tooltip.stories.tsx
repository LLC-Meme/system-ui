import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TooltipRoot from "./root";
import TooltipTrigger from "./trigger";
import TooltipContent from "./content";

function TooltipExample() {
  return (
    <TooltipRoot>
      <TooltipTrigger className="w-fit">
        <div>Hover me</div>
      </TooltipTrigger>
      <TooltipContent>
        <div>Tooltip content</div>
      </TooltipContent>
    </TooltipRoot>
  );
}

/**
 * ツールチップのコンポーネントです。
 *
 * ## 使い方
 * 以下のコンポーネントを組み合わせて使用します。
 * - `Tooltip.Container`: 全てのコンポーネントをラップします。
 * - `Tooltip.Trigger`: ツールチップを表示する要素をラップします。この要素をホバーするとツールチップが表示されます。
 * - `Tooltip.Content`: ツールチップの中身をラップします。
 */
const meta = {
  title: "UI/Tooltip",
  component: TooltipExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TooltipExample>;

export default meta;
type Story = StoryObj<typeof TooltipExample>;

export const Example: Story = {
  args: {},
};

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./tooltip";


function TooltipExample() {
  return (
    <Tooltip.Container className="w-40">
      <Tooltip.Trigger>
        <div>
          Hover me
        </div>
      </Tooltip.Trigger>
      <Tooltip.Content className="w-40">
        <div>Tooltip content</div>
      </Tooltip.Content>
    </Tooltip.Container>
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
  title: "Tooltip",
  component: TooltipExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
} satisfies Meta<typeof TooltipExample>;

export default meta;
type Story = StoryObj<typeof TooltipExample>;

export const Example: Story = {
  args: {}
};
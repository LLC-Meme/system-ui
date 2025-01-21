import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Selector from "./selector";

function SelectorExample() {
  return (
    <Selector.Select>
      <Selector.Option value="1">
        選択肢1
      </Selector.Option>
      <Selector.Option value="2">
        選択肢2
      </Selector.Option>
      <Selector.Option value="3">
        選択肢3
      </Selector.Option>
    </Selector.Select>
  );
}

/**
 * セレクトボックスを提供します。  
 * `Selector.Select`で各`Selector.Option`をラップして使用してください。  
 */
const meta = {
  title: "Selector",
  component: SelectorExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SelectorExample>;

export default meta;
type Story = StoryObj<typeof SelectorExample>;

export const Example: Story = {
  args: {},
};
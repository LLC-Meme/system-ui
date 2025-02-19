import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectorSelect from "./select";
import SelectorOption from "./option";
import SelectorDefaultOption from "./default-option";

function SelectorExample() {
  return (
    <SelectorSelect defaultValue={""}>
      <SelectorDefaultOption>選択してください</SelectorDefaultOption>
      <SelectorOption value="1">選択肢1</SelectorOption>
      <SelectorOption value="2">選択肢2</SelectorOption>
      <SelectorOption value="3">選択肢3</SelectorOption>
    </SelectorSelect>
  );
}

/**
 * セレクトボックスを提供します。
 * `Selector.Select`で各`Selector.Option`をラップして使用してください。
 */
const meta = {
  title: "Form/Selector",
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

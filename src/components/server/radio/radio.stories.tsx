import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioLabel, RadioButton } from "./radio";

function RadioExample() {
  return (
    <RadioGroup>
      <RadioLabel>
        <RadioButton name="test" />
        <span>ラジオボタン1</span>
      </RadioLabel>
      <RadioLabel>
        <RadioButton name="test" />
        <span>ラジオボタン2</span>
      </RadioLabel>
      <RadioLabel>
        <RadioButton name="test" />
        <span>ラジオボタン3</span>
      </RadioLabel>
    </RadioGroup>
  );
}

/**
 * ラジオボタンのグループを提供します。
 *
 * `Radio.Group`、`Radio.Label`、`Radio.Button`の３つを組み合わせて使用します。
 */
const meta = {
  title: "Form/Radio",
  component: RadioExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioExample>;

export default meta;
type Story = StoryObj<typeof RadioExample>;

export const Example: Story = {
  args: {},
};

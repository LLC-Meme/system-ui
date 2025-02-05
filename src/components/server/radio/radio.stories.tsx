import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "./group";
import RadioLabel from "./label";
import RadioInput from "./input";
import RadioText from "./text";

function RadioExample() {
  return (
    <RadioGroup>
      <RadioLabel>
        <RadioInput name="test" />
        <RadioText>ラジオボタン1</RadioText>
      </RadioLabel>
      <RadioLabel>
        <RadioInput name="test" />
        <RadioText>ラジオボタン2</RadioText>
      </RadioLabel>
      <RadioLabel>
        <RadioInput name="test" />
        <RadioText>ラジオボタン3</RadioText>
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

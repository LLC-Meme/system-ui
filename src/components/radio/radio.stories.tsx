import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./radio";

function RadioExample() {
  return (
    <Radio.Group>
      <Radio.Label>
        <Radio.Button />
        <span>ラジオボタン1</span>
      </Radio.Label>
      <Radio.Label>
        <Radio.Button />
        <span>ラジオボタン2</span>
      </Radio.Label>
      <Radio.Label>
        <Radio.Button />
        <span>ラジオボタン3</span>
      </Radio.Label>
    </Radio.Group>
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

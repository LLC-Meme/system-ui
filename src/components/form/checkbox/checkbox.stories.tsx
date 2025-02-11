import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CheckboxLabel from "./label";
import CheckboxInput from "./input";
import CheckboxText from "./text";

const CheckboxExample = () => {
  return (
    <CheckboxLabel>
      <CheckboxInput />
      <CheckboxText>テキスト</CheckboxText>
    </CheckboxLabel>
  );
};

/**
 * チェックボックスのコンポーネントです。
 *
 * `Checkbox.Box`と`Checkbox.Label`を組み合わせて使います。
 */
const meta = {
  title: "Form/Checkbox",
  component: CheckboxExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxExample>;

export default meta;

export const Example: StoryObj<typeof CheckboxExample> = {
  render: () => <CheckboxExample />,
};

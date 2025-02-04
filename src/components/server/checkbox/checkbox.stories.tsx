import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxBox, CheckboxLabel } from "./checkbox";

const CheckboxExample = () => {
  return (
    <CheckboxLabel>
      <CheckboxBox />
      <span>テキスト</span>
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

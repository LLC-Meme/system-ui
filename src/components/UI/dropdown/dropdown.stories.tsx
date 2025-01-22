import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./dropdown";


function DropdownExample() {
  return (
    <Dropdown.Container className="w-80">
      <Dropdown.Trigger>
        Dropdown Trigger
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item href="/item1">
          Dropdown Item 1
        </Dropdown.Item>
        <Dropdown.Item href="/item2">
          Dropdown Item 2
        </Dropdown.Item>
        <Dropdown.Item href="/item3">
          Dropdown Item 3
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Container>
  );
}


/**
 * ドロップダウンの利用例です。  
 * `Dropdown.Trigger`コンポーネントをクリックすると、`Dropdown.Content`コンポーネントが表示されます。  
 * `Dropdown.Item`コンポーネントをクリックすると、リンク先に遷移します。  
 */
const meta = {
  title: "UI/Dropdown",
  component: DropdownExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownExample>;

export default meta;
type Story = StoryObj<typeof DropdownExample>;

export const Example: Story = {
  args: {},
};
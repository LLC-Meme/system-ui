import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Collapsible from "./collapsible";


function CollapsibleExample() {
  return (
    <Collapsible.Container className="w-80">
      <Collapsible.Trigger>
        Collapsible Trigger
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Collapsible.Item href="/item1">
          Collapsible Item 1
        </Collapsible.Item>
        <Collapsible.Item href="/item2">
          Collapsible Item 2
        </Collapsible.Item>
        <Collapsible.Item href="/item3">
          Collapsible Item 3
        </Collapsible.Item>
      </Collapsible.Content>
    </Collapsible.Container>
  );
}


/**
 * ドロップダウンの利用例です。  
 * `Collapsible.Trigger`コンポーネントをクリックすると、`Collapsible.Content`コンポーネントが表示されます。  
 * `Collapsible.Item`コンポーネントをクリックすると、リンク先に遷移します。  
 */
const meta = {
  title: "UI/Collapsible",
  component: CollapsibleExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CollapsibleExample>;

export default meta;
type Story = StoryObj<typeof CollapsibleExample>;

export const Example: Story = {
  args: {},
};
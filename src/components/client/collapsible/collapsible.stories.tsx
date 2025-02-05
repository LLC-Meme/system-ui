import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CollapsibleRoot from "./root";
import CollapsibleTrigger from "./trigger";
import CollapsibleContent from "./content";
import CollapsibleItem from "./item";

function CollapsibleExample() {
  return (
    <CollapsibleRoot className="w-80">
      <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
      <CollapsibleContent>
        <CollapsibleItem href="/item1">Collapsible Item 1</CollapsibleItem>
        <CollapsibleItem href="/item2">Collapsible Item 2</CollapsibleItem>
        <CollapsibleItem href="/item3">Collapsible Item 3</CollapsibleItem>
      </CollapsibleContent>
    </CollapsibleRoot>
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

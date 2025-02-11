import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SidebarContainer from "./container";
import SidebarGroup from "./group";
import SidebarGroupTitle from "./group-title";
import SidebarItem from "./item";
import CollapsibleRoot from "../../UI/collapsible/root";
import CollapsibleTrigger from "../../UI/collapsible/trigger";
import CollapsibleContent from "../../UI/collapsible/content";
import CollapsibleItem from "../../UI/collapsible/item";

function SidebarExample() {
  return (
    <SidebarContainer isOpen className="w-80">
      <SidebarGroup>
        <SidebarGroupTitle>Group Label</SidebarGroupTitle>
        <SidebarItem>Item</SidebarItem>
        <SidebarItem current>Current Item</SidebarItem>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupTitle>Group Label</SidebarGroupTitle>
        <CollapsibleRoot>
          <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
          <CollapsibleContent>
            <CollapsibleItem href="/item1">Collapsible Item 1</CollapsibleItem>
            <CollapsibleItem href="/item2">Collapsible Item 2</CollapsibleItem>
          </CollapsibleContent>
        </CollapsibleRoot>
        <CollapsibleRoot>
          <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
          <CollapsibleContent>
            <CollapsibleItem href="/item1">Collapsible Item 1</CollapsibleItem>
            <CollapsibleItem href="/item2">Collapsible Item 2</CollapsibleItem>
          </CollapsibleContent>
        </CollapsibleRoot>
        <CollapsibleRoot>
          <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
          <CollapsibleContent>
            <CollapsibleItem href="/item1">Collapsible Item 1</CollapsibleItem>
            <CollapsibleItem href="/item2">Collapsible Item 2</CollapsibleItem>
          </CollapsibleContent>
        </CollapsibleRoot>
        <CollapsibleRoot>
          <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
          <CollapsibleContent>
            <CollapsibleItem href="/item1">Collapsible Item 1</CollapsibleItem>
            <CollapsibleItem href="/item2">Collapsible Item 2</CollapsibleItem>
          </CollapsibleContent>
        </CollapsibleRoot>
        <CollapsibleRoot>
          <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
          <CollapsibleContent>
            <CollapsibleItem href="/item1">Collapsible Item 1</CollapsibleItem>
            <CollapsibleItem href="/item2">Collapsible Item 2</CollapsibleItem>
          </CollapsibleContent>
        </CollapsibleRoot>
        <CollapsibleRoot>
          <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
          <CollapsibleContent>
            <CollapsibleItem href="/item1">Collapsible Item 1</CollapsibleItem>
            <CollapsibleItem href="/item2">Collapsible Item 2</CollapsibleItem>
          </CollapsibleContent>
        </CollapsibleRoot>
      </SidebarGroup>
    </SidebarContainer>
  );
}

/**
 * サイドバーのサンプルです。
 * `Collapsible`コンポーネントなどと併用してサイドバーを表現しています。
 */
const meta = {
  title: "Layout/Sidebar",
  component: SidebarExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SidebarExample>;

export default meta;
type Story = StoryObj<typeof SidebarExample>;

export const Example: Story = {
  args: {
    children: "Group",
  },
};

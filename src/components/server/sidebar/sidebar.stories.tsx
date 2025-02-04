import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  SidebarContainer,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
} from "./sidebar";
import {
  CollapsibleRoot,
  CollapsibleItem,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../../client/collapsible/collapsible";

function SidebarExample() {
  return (
    <SidebarContainer isOpen className="w-80">
      <SidebarGroup>
        <SidebarGroupLabel>Group Label</SidebarGroupLabel>
        <SidebarItem>Item</SidebarItem>
        <SidebarItem current>Current Item</SidebarItem>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Group Label</SidebarGroupLabel>
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

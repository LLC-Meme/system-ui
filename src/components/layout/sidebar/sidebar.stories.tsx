import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./sidebar";
import Collapsible from "../../UI/collapsible/collapsible";


function SidebarExample() {
  return (
    <Sidebar.Container isOpen className="w-80">
      <Sidebar.Group>
        <Sidebar.GroupLabel>Group Label</Sidebar.GroupLabel>
        <Sidebar.Item>Item</Sidebar.Item>
        <Sidebar.Item current>Current Item</Sidebar.Item>
      </Sidebar.Group>
      <Sidebar.Group>
        <Sidebar.GroupLabel>Group Label</Sidebar.GroupLabel>
        <Collapsible.Container>
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
          </Collapsible.Content>
        </Collapsible.Container>
        <Collapsible.Container>
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
          </Collapsible.Content>
        </Collapsible.Container>
        <Collapsible.Container>
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
          </Collapsible.Content>
        </Collapsible.Container>
        <Collapsible.Container>
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
          </Collapsible.Content>
        </Collapsible.Container>
        <Collapsible.Container>
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
          </Collapsible.Content>
        </Collapsible.Container>
        <Collapsible.Container>
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
          </Collapsible.Content>
        </Collapsible.Container>
      </Sidebar.Group>
    </Sidebar.Container>
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
  tags: ["autodocs"]
} satisfies Meta<typeof SidebarExample>;

export default meta;
type Story = StoryObj<typeof SidebarExample>;

export const Example: Story = {
  args: {
    children: "Group",
  },
};
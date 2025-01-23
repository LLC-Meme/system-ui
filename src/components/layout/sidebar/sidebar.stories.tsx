import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./sidebar";
import Dropdown from "../../UI/dropdown/dropdown";


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
        <Dropdown.Container>
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
          </Dropdown.Content>
        </Dropdown.Container>
        <Dropdown.Container>
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
          </Dropdown.Content>
        </Dropdown.Container>
        <Dropdown.Container>
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
          </Dropdown.Content>
        </Dropdown.Container>
        <Dropdown.Container>
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
          </Dropdown.Content>
        </Dropdown.Container>
        <Dropdown.Container>
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
          </Dropdown.Content>
        </Dropdown.Container>
        <Dropdown.Container>
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
          </Dropdown.Content>
        </Dropdown.Container>
      </Sidebar.Group>
    </Sidebar.Container>
  );
}


/**
 * サイドバーのサンプルです。  
 * `Dropdown`コンポーネントなどと併用してサイドバーを表現しています。  
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
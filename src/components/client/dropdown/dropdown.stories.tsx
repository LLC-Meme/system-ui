import React from "react";
import { type Meta, StoryObj } from "@storybook/react";
import Dropdown from "./dropdown";
import Button from "../../server/button/button";

function DropdownExample() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Button>Open Dropdown</Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Dropdown Item 1</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Dropdown Item 2</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Sub>
          <Dropdown.SubTrigger>Dropdown Item 3</Dropdown.SubTrigger>
          <Dropdown.SubContent>
            <Dropdown.Item>Dropdown Sub Item 1</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Dropdown Sub Item 2</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Dropdown Sub Item 3</Dropdown.Item>
          </Dropdown.SubContent>
        </Dropdown.Sub>
        <Dropdown.Divider />
        <Dropdown.Item variant="danger">Dropdown Item 4</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}

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

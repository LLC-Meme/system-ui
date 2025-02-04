import React from "react";
import { type Meta, StoryObj } from "@storybook/react";
import {
  DropdownRoot,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownDivider,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
} from "./dropdown";
import Button from "../../server/button/button";

function DropdownExample() {
  return (
    <DropdownRoot>
      <DropdownTrigger asChild>
        <Button>Open Dropdown</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Dropdown Item 1</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Dropdown Item 2</DropdownItem>
        <DropdownDivider />
        <DropdownSub>
          <DropdownSubTrigger>Dropdown Item 3</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownItem>Dropdown Sub Item 1</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Dropdown Sub Item 2</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Dropdown Sub Item 3</DropdownItem>
          </DropdownSubContent>
        </DropdownSub>
        <DropdownDivider />
        <DropdownItem variant="danger">Dropdown Item 4</DropdownItem>
      </DropdownContent>
    </DropdownRoot>
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

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SheetRoot from "./root";
import SheetTrigger from "./trigger";
import SheetContent from "./content";
import Button from "../../server/button/button";

function SheetExample() {
  return (
    <SheetRoot>
      <SheetTrigger>
        <Button>Open sheet</Button>
      </SheetTrigger>
      <SheetContent>Sheet content</SheetContent>
    </SheetRoot>
  );
}

const meta = {
  title: "UI/Sheet",
  component: SheetExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SheetExample>;

export default meta;
type Story = StoryObj<typeof SheetExample>;

export const Example: Story = {
  args: {},
};

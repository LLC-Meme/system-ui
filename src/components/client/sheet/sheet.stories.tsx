import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Sheet from "./sheet";
import Button from "../../server/button/button";

function SheetExample() {
  return (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>Open sheet</Button>
      </Sheet.Trigger>
      <Sheet.Content>Sheet content</Sheet.Content>
    </Sheet.Root>
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

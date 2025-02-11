import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ModalRoot from "./root";
import ModalTrigger from "./trigger";
import ModalContent from "./content";
import Button from "../button/button";

function ModalExample() {
  return (
    <ModalRoot>
      <ModalTrigger>
        <Button>Open modal</Button>
      </ModalTrigger>
      <ModalContent>
        <h1>Modal content</h1>
        <p>Some text in the modal</p>
      </ModalContent>
    </ModalRoot>
  );
}

const meta = {
  title: "UI/Modal",
  component: ModalExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ModalExample>;

export default meta;
type Story = StoryObj<typeof ModalExample>;

export const Example: Story = {
  args: {},
};

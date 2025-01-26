import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./modal";
import Button from "../../server/button/button";

function ModalExample() {
  return (
    <Modal.Root>
      <Modal.Trigger>
        <Button>Open modal</Button>
      </Modal.Trigger>
      <Modal.Content>
        <h1>Modal content</h1>
        <p>Some text in the modal</p>
      </Modal.Content>
    </Modal.Root>
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

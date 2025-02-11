import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Toaster from "./toaster";
import useToast from "../../../hooks/useToast";
import { Button } from "../../UI/button";
import ToastAction from "./action";

function ToastExample() {
  const { toast } = useToast();
  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">
                <Button className="ml-16">Undo</Button>
              </ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
    </>
  );
}

const meta = {
  title: "Layout/Toaster",
  component: ToastExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToastExample>;

export default meta;
type Story = StoryObj<typeof ToastExample>;

export const Default: Story = {
  args: {},
};

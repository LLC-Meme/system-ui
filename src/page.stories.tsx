import type { Meta, StoryObj } from "@storybook/react";
import Page from "./page";

const meta = {
  title: "Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Example: Story = {};

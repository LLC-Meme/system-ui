import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./spinner";

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      description: "追加されるクラス名",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Example: Story = {
  args: {},
};

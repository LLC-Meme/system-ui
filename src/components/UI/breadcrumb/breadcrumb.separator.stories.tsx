import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./breadcrumb";

/**
 * Breadcrumbのセパレータを表示します。  
 */
const meta = {
  title: "UI/Breadcrumb/Separator",
  component: Breadcrumb.Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb.Separator>;

export default meta;
type Story = StoryObj<typeof Breadcrumb.Separator>;

export const Separator: Story = {
  args: {},
};

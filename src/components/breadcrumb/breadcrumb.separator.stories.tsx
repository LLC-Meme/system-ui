import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./breadcrumb";

/**
 * Breadcrumbのセパレータを表示します。  
 */
const meta = {
  title: "Breadcrumb/Separator",
  component: Breadcrumb.Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb.Separator>;

export default meta;

export const Separator: StoryObj<typeof Breadcrumb.Separator> = {
  render: () => (<Breadcrumb.Separator />),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BreadcrumbContainer from "./container";
import BreadcrumbItem from "./item";
import BreadcrumbSeparator from "./separator";
import BreadcrumbHome from "./home";

function BreadcrumbExample() {
  return (
    <BreadcrumbContainer>
      <BreadcrumbHome href="/" />
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/dashboard/sales">Sales</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/dashboard/sales/data" current>
        Data
      </BreadcrumbItem>
    </BreadcrumbContainer>
  );
}

/**
 * Breadcrumbの使用例です。
 *
 * `Container`、`Item`、`Separator`を組み合わせて使用します。
 */
const meta = {
  title: "UI/Breadcrumb",
  component: BreadcrumbExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BreadcrumbExample>;

export default meta;
type Story = StoryObj<typeof BreadcrumbExample>;

export const Example: Story = {
  args: {},
};

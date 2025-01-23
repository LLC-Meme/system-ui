import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./breadcrumb";


function BreadcrumbExample() {
  return (
    <Breadcrumb.Container>
      <Breadcrumb.Item href="/" current={false}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item href="/dashboard" current={false}>
        Dashboard
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item href="/dashboard/sales" current={false}>
        Sales
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item href="/dashboard/sales/data" current={true}>
        Data
      </Breadcrumb.Item>
    </Breadcrumb.Container>
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

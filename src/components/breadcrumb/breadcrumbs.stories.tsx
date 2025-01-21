import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./breadcrumb";


function BreadcrumbExample() {
  return (
    <Breadcrumb.Container>
      <Breadcrumb.Item current={false}>
        <a href="/">Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item current={false}>
        <a href="/dashboard">Dashboard</a>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item current={false}>
        <a href="/dashboard/sales">Sales</a>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item current={true}>
        <a href="/dashboard/sales/data">Data</a>
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
  title: "Breadcrumb",
  component: BreadcrumbExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BreadcrumbExample>;

export default meta;

export const Example: StoryObj<typeof BreadcrumbExample> = {
  render: () => (<BreadcrumbExample />),
};

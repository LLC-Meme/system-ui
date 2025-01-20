import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./breadcrumb";

/**
 * Breadcrumbの各リンクアイテムを表示します。  
 * 適宜`a`や`Link`をラップして用いてください。  
 */
const meta = {
  title: "Breadcrumb/Item",
  component: Breadcrumb.Separator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    current: {
      description: "現在のページかどうかを指定します。",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    children: {
      description: "リンクアイテムに表示するテキスト",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb.Item>;

export default meta;

export const Default: StoryObj<typeof Breadcrumb.Item> = {
  render: () => (
    <Breadcrumb.Item
      current={false}
    >
      Item
    </Breadcrumb.Item>
  ),
};

export const Current: StoryObj<typeof Breadcrumb.Item> = {
  render: () => (
    <Breadcrumb.Item
      current={true}
    >
      Item
    </Breadcrumb.Item>
  ),
};
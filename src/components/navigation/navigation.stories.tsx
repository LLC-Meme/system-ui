import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "./navigation";

/**
 * リンクをスタイリングするコンポーネントです。  
 * 
 * `asChild`を`true`にすることで、リンク以外の要素を使うことができます。  
 * デフォルトでは`a`要素を使います。  
 */
const meta = {
  title: "Navigation",
  component: Navigation,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLAnchorElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "リンクに表示するテキスト",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    asChild: {
      description: "子要素を直接表示するかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Example: Story = {
  render: () => {
    return (
      <Navigation href="/#">
        リンク
      </Navigation>
    );
  }
};
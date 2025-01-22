import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

/** 
 * ボタンコンポーネントです。  
 * asChildをtrueにすることで、ボタン以外の要素を使うことができます。  
*/
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "ボタン要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLButtonElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "ボタンに表示するテキスト",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    variant: {
      description: "ボタンのデザインバリアントを指定します。",
      control: {
        type: "select",
        options: [
          "default",
          "danger",
          "outline",
        ],
      },
      table: {
        type: { summary: "\"default\" | \"danger\" | \"outline\"" },
        defaultValue: { summary: "default" },
      },
    },
    className: {
      description: "追加のクラス名",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "ボタン",
    variant: "default",
  }
};

export const Danger: Story = {
  args: {
    children: "ボタン",
    variant: "danger",
  }
};

export const Outline: Story = {
  args: {
    children: "ボタン",
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    children: <a href={"/"}>ボタン</a>,
    variant: "default",
  },
};

export const Disabled: Story = {
  args: {
    children: "ボタン",
    variant: "default",
    disabled: true,
  },
}
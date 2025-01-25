import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Surface from "./surface";

/**
 * Surfaceを表現するコンポーネントです。
 */
const meta = {
  title: "UI/Surface",
  component: Surface,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "この要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "Surface内に表示するコンテンツ",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Surface>;

export default meta;
type Story = StoryObj<typeof Surface>;

export const Example: Story = {
  args: {},
  render: () => {
    return (
      <Surface>
        <p>Surfaceコンポーネントのサンプル</p>
      </Surface>
    );
  },
};

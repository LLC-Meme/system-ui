import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SearchWindowContainer from "./container";
import SearchWindowInput from "./input";

function SearchWindowExample() {
  return (
    <SearchWindowContainer>
      <SearchWindowInput placeholder="Search..." />
    </SearchWindowContainer>
  );
}

/**
 * 検索ウィンドウを提供します。
 * 必ず`SearchWindow.Container`と`SearchWindow.Input`を組み合わせて使用してください。
 */
const meta = {
  title: "UI/SearchWindow",
  component: SearchWindowExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchWindowExample>;

export default meta;
type Story = StoryObj<typeof SearchWindowExample>;

export const Example: Story = {
  args: {},
};

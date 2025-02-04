import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HeaderContainer, HeaderSidebarController } from "./header";

function HeaderExample() {
  return (
    <HeaderContainer>
      <HeaderSidebarController onClick={() => {}} />
      <div className="ml-4 text-lg font-semibold">Acme Dashboard</div>
    </HeaderContainer>
  );
}

/**
 * ヘッダーコンポーネントです。
 *
 * `Header.Container` はヘッダーのコンテナです。
 * `Header.SidebarController` はサイドバーのコントローラーです。用いなくても問題ありません。
 */
const meta = {
  title: "Layout/Header",
  component: HeaderExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderExample>;

export default meta;
type Story = StoryObj<typeof HeaderExample>;

export const Example: Story = {
  render: HeaderExample,
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Header from "./header";

function HeaderExample() {
  return (
    <Header.Container>
      <Header.SidebarController onClick={() => {}} />
      <div className="w-4" />
      <div className="text-lg font-semibold bg-red-100">
        Acme Dashboard
      </div>
    </Header.Container>
  );
}

/**
 * ヘッダーコンポーネントです。  
 * 
 * `Header.Container` はヘッダーのコンテナです。  
 * `Header.SidebarController` はサイドバーのコントローラーです。用いなくても問題ありません。  
 */
const meta = {
  title: "Header",
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

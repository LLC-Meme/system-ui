import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./breadcrumb";

/**
 * Breadcrumbのコンテナです。  
 * 
 * このコンポーネント直下に`Item`や`Separator`を配置してください。
 */
const meta = {
  title: "Breadcrumb/Container",
  component: Breadcrumb.Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb.Container>;

export default meta;

export const Container: StoryObj<typeof Breadcrumb.Container> = {
  render: () => (
    <Breadcrumb.Container>
      {null}
    </Breadcrumb.Container>
  ),
};

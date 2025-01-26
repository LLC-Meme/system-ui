import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./breadcrumb";

/**
 * Breadcrumbのコンテナです。
 *
 * このコンポーネント直下に`Item`や`Separator`を配置してください。
 */
const meta = {
  title: "UI/Breadcrumb/Container",
  component: Breadcrumb.Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb.Container>;

export default meta;
type Story = StoryObj<typeof Breadcrumb.Container>;

export const Container: Story = {
  args: {},
};

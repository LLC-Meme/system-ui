import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./pagination";

function PaginationExample() {
  return (
    <Pagination.Container>
      <Pagination.Prev />
      <Pagination.Item current>1</Pagination.Item>
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item>3</Pagination.Item>
      <Pagination.Next />
    </Pagination.Container>
  );
}

/**
 * ページネーションコンポーネントです。  
 */
const meta = {
  title: "Pagination",
  component: PaginationExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PaginationExample>;

export default meta;
type Story = StoryObj<typeof PaginationExample>;

export const Example: Story = {
  args: {},
};

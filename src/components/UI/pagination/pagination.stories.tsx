import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./pagination";

function PaginationExample() {
  return (
    <Pagination.Container>
      <Pagination.Prev href="/1" />
      <Pagination.Item href="/1">1</Pagination.Item>
      <Pagination.Item href="/2" current>2</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item href="/20">20</Pagination.Item>
      <Pagination.Next href="/3" />
    </Pagination.Container>
  );
}

/**
 * ページネーションコンポーネントです。  
 */
const meta = {
  title: "UI/Pagination",
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

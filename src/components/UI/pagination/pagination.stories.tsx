import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PaginationContainer from "./container";
import PaginationItem from "./item";
import PaginationNext from "./next";
import PaginationPrev from "./prev";
import PaginationEllipsis from "./ellipsis";

function PaginationExample() {
  return (
    <PaginationContainer>
      <PaginationPrev href="/1" disabled />
      <PaginationItem href="/1" current>
        1
      </PaginationItem>
      <PaginationItem href="/2">2</PaginationItem>
      <PaginationEllipsis />
      <PaginationItem href="/20">20</PaginationItem>
      <PaginationNext href="/2" />
    </PaginationContainer>
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

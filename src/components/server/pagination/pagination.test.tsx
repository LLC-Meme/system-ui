import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  PaginationContainer,
  PaginationItem,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrev,
} from "./pagination";

describe("Pagination Component", () => {
  it("ページネーションコンポーネントを表示", () => {
    render(
      <PaginationContainer>
        <PaginationItem href="#">1</PaginationItem>
        <PaginationItem href="#">2</PaginationItem>
        <PaginationNext href="#" />
      </PaginationContainer>,
    );

    const container = screen.getByRole("navigation");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("flex", "items-center", "gap-1");
  });

  it("Prevボタンを表示", () => {
    render(<PaginationPrev href="#" />);
    const prevButton = screen.getByLabelText("pagination-prev");

    expect(prevButton).toBeInTheDocument();
    expect(prevButton).toHaveAttribute("aria-label", "pagination-prev");
    expect(prevButton).toHaveClass(
      "center",
      "w-8",
      "h-8",
      "rounded-[4px]",
      "text-info",
    );
  });

  it("Nextボタンを表示", () => {
    render(<PaginationNext href="#" />);
    const nextButton = screen.getByLabelText("pagination-next");

    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveAttribute("aria-label", "pagination-next");
    expect(nextButton).toHaveClass(
      "center",
      "w-8",
      "h-8",
      "rounded-[4px]",
      "text-info",
    );
  });

  it("Itemを表示", () => {
    render(
      <PaginationItem href="#" data-testid="pagination-item">
        1
      </PaginationItem>,
    );
    const item = screen.getByTestId("pagination-item");

    expect(item).toBeInTheDocument();
    expect(item).toHaveClass(
      "center",
      "w-8",
      "h-8",
      "rounded-[4px]",
      "text-info",
      "hover:bg-info-muted",
    );
    expect(item).toHaveTextContent("1");
  });

  it("Itemのcurrentを指定", () => {
    render(
      <PaginationItem href="#" current data-testid="current-item">
        2
      </PaginationItem>,
    );
    const currentItem = screen.getByTestId("current-item");

    expect(currentItem).toBeInTheDocument();
    expect(currentItem).toHaveClass("bg-info text-on-status hover");
    expect(currentItem).not.toHaveClass("hover:bg-info-muted");
  });

  it("asChildをtrueにすると任意のコンポーネントを表示", () => {
    render(
      <PaginationItem asChild>
        <button data-testid="custom-item">Custom Button</button>
      </PaginationItem>,
    );

    const customItem = screen.getByTestId("custom-item");

    expect(customItem).toBeInTheDocument();
    expect(customItem).toHaveClass(
      "center",
      "w-8",
      "h-8",
      "rounded-[4px]",
      "text-info",
    );
    expect(customItem.tagName).toBe("BUTTON");
  });

  it("Ellipsisを表示", () => {
    render(<PaginationEllipsis />);
    const ellipsis = screen.getByLabelText("pagination-ellipsis");

    expect(ellipsis).toBeInTheDocument();
  });

  it("Prevボタンにasでカスタムの要素を指定", () => {
    render(
      <PaginationPrev as="button" data-testid="prev-custom">
        Custom Prev
      </PaginationPrev>,
    );

    const customPrev = screen.getByTestId("prev-custom");

    expect(customPrev).toBeInTheDocument();
    expect(customPrev).toHaveClass(
      "center",
      "w-8",
      "h-8",
      "rounded-[4px]",
      "text-info",
    );
    expect(customPrev.tagName).toBe("BUTTON");
  });

  it("Nextボタンにasでカスタムの要素を指定", () => {
    render(
      <PaginationNext as="button" data-testid="next-custom">
        Custom Next
      </PaginationNext>,
    );

    const customNext = screen.getByTestId("next-custom");

    expect(customNext).toBeInTheDocument();
    expect(customNext).toHaveClass(
      "center",
      "w-8",
      "h-8",
      "rounded-[4px]",
      "text-info",
    );
    expect(customNext.tagName).toBe("BUTTON");
  });

  it("Containerにrefを設定", () => {
    // nav要素のrefを設定
    const ref = React.createRef<HTMLDivElement>();
    render(
      <PaginationContainer ref={ref}>
        <PaginationItem href="#">1</PaginationItem>
      </PaginationContainer>,
    );

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLElement);
    // refがnav要素であることを確認
    expect(ref.current?.tagName).toBe("NAV");
  });

  it("Prevにrefを設定", () => {
    // button要素のrefを設定
    const ref = React.createRef<HTMLAnchorElement>();
    render(<PaginationPrev ref={ref} href="#" />);

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    // refがbutton要素であることを確認
    expect(ref.current?.tagName).toBe("A");
  });

  it("Nextにrefを設定", () => {
    // button要素のrefを設定
    const ref = React.createRef<HTMLAnchorElement>();
    render(<PaginationNext ref={ref} href="#" />);

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    // refがbutton要素であることを確認
    expect(ref.current?.tagName).toBe("A");
  });

  it("Itemにrefを設定", () => {
    // a要素のrefを設定
    const ref = React.createRef<HTMLAnchorElement>();
    render(
      <PaginationItem ref={ref} href="#">
        1
      </PaginationItem>,
    );

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    // refがa要素であることを確認
    expect(ref.current?.tagName).toBe("A");
  });
});

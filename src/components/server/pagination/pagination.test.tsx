import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Pagination from "./pagination";

const { Container, Prev, Next, Item, Ellipsis } = Pagination;

describe("Pagination Component", () => {
  it("ページネーションコンポーネントを表示", () => {
    render(
      <Container>
        <Item href="#">1</Item>
        <Item href="#">2</Item>
        <Next href="#" />
      </Container>,
    );

    const container = screen.getByRole("navigation");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("flex", "items-center", "gap-1");
  });

  it("Prevボタンを表示", () => {
    render(<Prev href="#" />);
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
    render(<Next href="#" />);
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
      <Item href="#" data-testid="pagination-item">
        1
      </Item>,
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
      <Item href="#" current data-testid="current-item">
        2
      </Item>,
    );
    const currentItem = screen.getByTestId("current-item");

    expect(currentItem).toBeInTheDocument();
    expect(currentItem).toHaveClass("bg-info text-on-status hover");
    expect(currentItem).not.toHaveClass("hover:bg-info-muted");
  });

  it("asChildをtrueにすると任意のコンポーネントを表示", () => {
    render(
      <Item asChild>
        <button data-testid="custom-item">Custom Button</button>
      </Item>,
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
    render(<Ellipsis />);
    const ellipsis = screen.getByLabelText("pagination-ellipsis");

    expect(ellipsis).toBeInTheDocument();
  });

  it("Prevボタンにasでカスタムの要素を指定", () => {
    render(
      <Prev as="button" data-testid="prev-custom">
        Custom Prev
      </Prev>,
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
      <Next as="button" data-testid="next-custom">
        Custom Next
      </Next>,
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
      <Container ref={ref}>
        <Item href="#">1</Item>
      </Container>,
    );

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLElement);
    // refがnav要素であることを確認
    expect(ref.current?.tagName).toBe("NAV");
  });

  it("Prevにrefを設定", () => {
    // button要素のrefを設定
    const ref = React.createRef<HTMLAnchorElement>();
    render(<Prev ref={ref} href="#" />);

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    // refがbutton要素であることを確認
    expect(ref.current?.tagName).toBe("A");
  });

  it("Nextにrefを設定", () => {
    // button要素のrefを設定
    const ref = React.createRef<HTMLAnchorElement>();
    render(<Next ref={ref} href="#" />);

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    // refがbutton要素であることを確認
    expect(ref.current?.tagName).toBe("A");
  });

  it("Itemにrefを設定", () => {
    // a要素のrefを設定
    const ref = React.createRef<HTMLAnchorElement>();
    render(
      <Item ref={ref} href="#">
        1
      </Item>,
    );

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    // refがa要素であることを確認
    expect(ref.current?.tagName).toBe("A");
  });
});

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SearchWindow from "./search-window";

const { Container, Input } = SearchWindow;


describe("SearchWindow", () => {

  it("ContainerがデフォルトのclassでかつMagnifyingGlassとともに表示", () => {
    render(
      <Container data-testid="search-container">
        <Input />
      </Container>
    );

    const container = screen.getByTestId("search-container");

    // デフォルトのクラスが適用されていることを確認
    expect(container).toHaveClass(
      "relative",
      "bg-surface-muted1",
      "h-8",
      "rounded-lg"
    );

    // svg要素が表示されていることを確認
    const svgEl = container.querySelector("svg");
    expect(svgEl).toBeInTheDocument();
    // pointer-events-noneクラスが適用されていることを確認
    expect(svgEl).toHaveClass("pointer-events-none");
  });


  it("カスタムのclassNameが適用されている", () => {
    render(
      <Container data-testid="search-container" className="custom-container">
        <Input />
      </Container>
    );
    const container = screen.getByTestId("search-container");
    expect(container).toHaveClass("custom-container");
  });


  it("refがContainerに適用されている", () => {
    const containerRef = React.createRef<HTMLDivElement>();

    render(
      <Container ref={containerRef}>
        <Input />
      </Container>
    );

    // refがContainerに適用されていることを確認
    expect(containerRef.current).toBeInstanceOf(HTMLDivElement);
  });


  it("inputがデフォルトのclassで表示", () => {
    render(
      <Container>
        <Input data-testid="search-input" placeholder="Search..." />
      </Container>
    );
    const inputEl = screen.getByTestId("search-input");

    // デフォルトのクラスが適用されていることを確認
    expect(inputEl).toHaveClass(
      "w-full",
      "h-full",
      "bg-transparent",
      "rounded-lg",
      "pl-8",
      "pr-2",
      "placeholder:text-foreground-muted"
    );

    // placeholderが適用されていることを確認
    expect(inputEl).toHaveAttribute("placeholder", "Search...");
  });


  it("inputにカスタムのクラスが適用", () => {
    render(
      <Container>
        <Input data-testid="search-input" className="custom-input" />
      </Container>
    );
    const inputEl = screen.getByTestId("search-input");
    expect(inputEl).toHaveClass("custom-input");
  });


  it("inputにrefが適用", () => {
    const inputRef = React.createRef<HTMLInputElement>();

    render(
      <Container>
        <Input ref={inputRef} />
      </Container>
    );

    // refがinputに適用されていることを確認
    expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
  });


  it("inputに入力できる", () => {
    render(
      <Container>
        <Input data-testid="search-input" />
      </Container>
    );
    const inputEl = screen.getByTestId("search-input") as HTMLInputElement;

    fireEvent.change(inputEl, { target: { value: "Hello" } });
    expect(inputEl.value).toBe("Hello");
  });


});
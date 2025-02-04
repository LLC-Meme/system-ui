import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SearchWindowContainer, SearchWindowInput } from "./search-window";

describe("SearchWindow", () => {
  it("Containerがデフォルトのclassで表示", () => {
    render(
      <SearchWindowContainer data-testid="search-container">
        <SearchWindowInput />
      </SearchWindowContainer>,
    );

    const container = screen.getByTestId("search-container");

    // デフォルトのクラスが適用されていることを確認
    expect(container).toHaveClass(
      "relative",
      "bg-surface-muted1",
      "h-8",
      "rounded-lg",
    );
  });

  it("カスタムのclassNameが適用されている", () => {
    render(
      <SearchWindowContainer
        data-testid="search-container"
        className="custom-container"
      >
        <SearchWindowInput />
      </SearchWindowContainer>,
    );
    const container = screen.getByTestId("search-container");
    expect(container).toHaveClass("custom-container");
  });

  it("refがContainerに適用されている", () => {
    const containerRef = React.createRef<HTMLDivElement>();

    render(
      <SearchWindowContainer ref={containerRef}>
        <SearchWindowInput />
      </SearchWindowContainer>,
    );

    // refがContainerに適用されていることを確認
    expect(containerRef.current).toBeInstanceOf(HTMLDivElement);
  });

  it("inputがデフォルトのclassで表示", () => {
    render(
      <SearchWindowContainer>
        <SearchWindowInput data-testid="search-input" placeholder="Search..." />
      </SearchWindowContainer>,
    );
    const inputEl = screen.getByTestId("search-input");

    // デフォルトのクラスが適用されていることを確認
    expect(inputEl).toHaveClass(
      "w-full",
      "h-full",
      "bg-transparent",
      "rounded-lg",
      "pl-9",
      "pr-2",
      "placeholder:text-foreground-muted",
    );

    // placeholderが適用されていることを確認
    expect(inputEl).toHaveAttribute("placeholder", "Search...");
  });

  it("inputにカスタムのクラスが適用", () => {
    render(
      <SearchWindowContainer>
        <SearchWindowInput
          data-testid="search-input"
          className="custom-input"
        />
      </SearchWindowContainer>,
    );
    const inputEl = screen.getByTestId("search-input");
    expect(inputEl).toHaveClass("custom-input");
  });

  it("inputにrefが適用", () => {
    const inputRef = React.createRef<HTMLInputElement>();

    render(
      <SearchWindowContainer>
        <SearchWindowInput ref={inputRef} />
      </SearchWindowContainer>,
    );

    // refがinputに適用されていることを確認
    expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
  });

  it("inputに入力できる", () => {
    render(
      <SearchWindowContainer>
        <SearchWindowInput data-testid="search-input" />
      </SearchWindowContainer>,
    );
    const inputEl = screen.getByTestId("search-input") as HTMLInputElement;

    fireEvent.change(inputEl, { target: { value: "Hello" } });
    expect(inputEl.value).toBe("Hello");
  });
});

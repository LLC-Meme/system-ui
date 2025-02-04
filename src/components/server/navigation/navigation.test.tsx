import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navigation } from "./navigation";

describe("Navigation Component", () => {
  it("<a>要素がデフォルトで表示", () => {
    render(<Navigation href="/test">Default Link</Navigation>);
    const linkElement = screen.getByText("Default Link");

    // <a>要素であることを確認
    expect(linkElement.tagName).toBe("A");
    // href属性が正しく設定されていることを確認
    expect(linkElement).toHaveAttribute("href", "/test");
    // デフォルトのクラスが適用されていることを確認
    expect(linkElement).toHaveClass(
      "text-info",
      "hover:underline",
      "hover:cursor-pointer",
    );
  });

  it("asChildプロップがtrueの場合、任意のコンポーネントが表示", () => {
    render(
      <Navigation asChild>
        <button>Custom Button</button>
      </Navigation>,
    );
    const buttonElement = screen.getByText("Custom Button");

    // <button>要素であることを確認
    expect(buttonElement.tagName).toBe("BUTTON");
    // デフォルトのクラスが適用されていることを確認
    expect(buttonElement).toHaveClass(
      "text-info",
      "hover:underline",
      "hover:cursor-pointer",
    );
  });

  it("追加のclassNameとhrefを指定", () => {
    render(
      <Navigation
        href="/test"
        className="custom-class"
        data-testid="navigation"
      >
        Link with Props
      </Navigation>,
    );
    const linkElement = screen.getByTestId("navigation");

    // 追加のclassNameが適用されていることを確認
    expect(linkElement).toHaveClass("custom-class");
    // href属性が正しく設定されていることを確認
    expect(linkElement).toHaveAttribute("href", "/test");
  });

  it("refが正しく設定されている", () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(<Navigation ref={ref}>Ref Test</Navigation>);

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    expect(ref.current?.textContent).toBe("Ref Test");
  });
});

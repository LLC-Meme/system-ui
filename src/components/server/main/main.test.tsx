import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Main from "./main";

describe("Main", () => {
  it("デフォルトのclassとchildrenを表示", () => {
    render(
      <Main data-testid="main" sidebarOpen={false}>
        Hello Main
      </Main>,
    );
    const mainEl = screen.getByTestId("main");

    expect(mainEl).toHaveClass(
      "mt-16",
      "pt-6",
      "px-8",
      "pb-12",
      "transition-[margin-left]",
    );
    expect(mainEl).toHaveTextContent("Hello Main");
    expect(mainEl).toHaveClass("ml-0");
  });

  it("sidebarOpenがtrueの場合、ml-80クラスが追加される", () => {
    render(
      <Main data-testid="main" sidebarOpen={true}>
        Sidebar Open Content
      </Main>,
    );
    const mainEl = screen.getByTestId("main");

    expect(mainEl).toHaveClass("ml-80");
  });

  it("カスタムクラスが追加される", () => {
    render(
      <Main data-testid="main" sidebarOpen={false} className="custom-class">
        Custom Class Content
      </Main>,
    );
    const mainEl = screen.getByTestId("main");

    expect(mainEl).toHaveClass(
      "custom-class",
      "mt-16",
      "pt-6",
      "px-8",
      "pb-12",
    );
  });

  it("ref属性が設定される", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Main ref={ref} sidebarOpen={false}>
        Ref Test Content
      </Main>,
    );

    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe("MAIN");
  });
});

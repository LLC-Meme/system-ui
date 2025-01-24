import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Surface from "./surface";


describe("Surface", () => {

  it("デフォルトのclassでsurfaceが表示", () => {
    render(<Surface data-testid="surface">Hello</Surface>);
    const surfaceEl = screen.getByTestId("surface");
    
    // デフォルトのclassが適用されていることを確認
    expect(surfaceEl).toHaveClass("bg-surface", "rounded-2xl", "px-8", "py-6");
    // テキストが表示されていることを確認
    expect(surfaceEl).toHaveTextContent("Hello");
    // タグ名がsectionであることを確認
    expect(surfaceEl.tagName).toBe("SECTION");
  });


  it("追加のclassが適用される", () => {
    render(
      <Surface data-testid="surface" className="my-custom-class">
        Custom
      </Surface>
    );
    const surfaceEl = screen.getByTestId("surface");
    
    // 追加のclassが適用されていることを確認
    expect(surfaceEl).toHaveClass("my-custom-class", "bg-surface", "rounded-2xl");
  });


  it("refが適用される", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Surface ref={ref}>Ref Test</Surface>);
    
    // refが適用されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe("SECTION");
  });


  it("子の要素が表示される", () => {
    render(
      <Surface>
        <p data-testid="child-para">Child Content</p>
      </Surface>
    );
    const childPara = screen.getByTestId("child-para");
    expect(childPara).toBeInTheDocument();
    expect(childPara).toHaveTextContent("Child Content");
  });


});
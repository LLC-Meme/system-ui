import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LabelText from "./label-text";


describe("LabelText コンポーネント", () => {
  it("LabelText が正しくレンダリングされる", () => {
    render(<LabelText data-testid="label-text">テストテキスト</LabelText>);
    const labelTextEl = screen.getByTestId("label-text");

    // span 要素であることを確認
    expect(labelTextEl.tagName).toBe("SPAN");

    // テキストが正しいことを確認
    expect(labelTextEl).toHaveTextContent("テストテキスト");
  });

  it("追加のクラス名が適用される", () => {
    render(
      <LabelText data-testid="label-text" className="custom-class">
        テストテキスト
      </LabelText>
    );
    const labelTextEl = screen.getByTestId("label-text");

    // デフォルトクラス "font-medium" と追加クラスが適用されていることを確認
    expect(labelTextEl).toHaveClass("font-semibold");
    expect(labelTextEl).toHaveClass("custom-class");
  });

  it("ref が正しく適用される", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<LabelText ref={ref}>テストテキスト</LabelText>);

    // ref が正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
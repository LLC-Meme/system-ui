import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Label from "./label";

describe("Label コンポーネント", () => {
  it("ラベルが正しくレンダリングされる", () => {
    render(<Label data-testid="label">テストラベル</Label>);
    const labelEl = screen.getByTestId("label");

    // ラベル要素であることを確認
    expect(labelEl.tagName).toBe("LABEL");

    // テキストが正しいことを確認
    expect(labelEl).toHaveTextContent("テストラベル");
  });

  it("追加のクラス名が適用される", () => {
    render(
      <Label data-testid="label" className="custom-class">
        テストラベル
      </Label>,
    );
    const labelEl = screen.getByTestId("label");

    // クラスが正しく適用されていることを確認
    expect(labelEl).toHaveClass("custom-class");
  });

  it("refが正しく適用される", () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref}>テストラベル</Label>);

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it("任意の属性が適用される", () => {
    render(
      <Label data-testid="label" htmlFor="input-id">
        テストラベル
      </Label>,
    );
    const labelEl = screen.getByTestId("label");

    // htmlFor属性が正しく適用されていることを確認
    expect(labelEl).toHaveAttribute("for", "input-id");
  });
});

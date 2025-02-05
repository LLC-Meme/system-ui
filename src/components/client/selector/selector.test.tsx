import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SelectorSelect from "./select";
import SelectorOption from "./option";

describe("Selector コンポーネント", () => {
  it("正しい選択肢がレンダリングされる", () => {
    render(
      <SelectorSelect data-testid="select">
        <SelectorOption value="1">選択肢1</SelectorOption>
        <SelectorOption value="2">選択肢2</SelectorOption>
        <SelectorOption value="3">選択肢3</SelectorOption>
      </SelectorSelect>,
    );

    // セレクトボックスが存在することを確認
    const select = screen.getByTestId("select");
    expect(select).toBeInTheDocument();

    // 選択肢が正しく表示されていることを確認
    expect(screen.getByText("選択肢1")).toBeInTheDocument();
    expect(screen.getByText("選択肢2")).toBeInTheDocument();
    expect(screen.getByText("選択肢3")).toBeInTheDocument();
  });

  it("選択された値が正しく変更される", () => {
    render(
      <SelectorSelect data-testid="select" defaultValue="">
        <SelectorOption value="">選択してください</SelectorOption>
        <SelectorOption value="1">選択肢1</SelectorOption>
        <SelectorOption value="2">選択肢2</SelectorOption>
        <SelectorOption value="3">選択肢3</SelectorOption>
      </SelectorSelect>,
    );

    const select = screen.getByTestId("select") as HTMLSelectElement;

    // 初期状態では選択なし
    expect(select.value).toBe("");

    // 選択肢2を選択
    fireEvent.change(select, { target: { value: "2" } });
    expect(select.value).toBe("2");

    // 選択肢3を選択
    fireEvent.change(select, { target: { value: "3" } });
    expect(select.value).toBe("3");
  });

  it("追加のクラス名が適用される", () => {
    render(
      <SelectorSelect className="custom-class" data-testid="select">
        <SelectorOption value="1">選択肢1</SelectorOption>
      </SelectorSelect>,
    );

    const select = screen.getByTestId("select");
    expect(select).toHaveClass("custom-class");
  });

  it("refが正しく適用される", () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(
      <SelectorSelect ref={ref}>
        <SelectorOption value="1">選択肢1</SelectorOption>
      </SelectorSelect>,
    );

    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it("選択肢に追加のクラス名が適用される", () => {
    render(
      <SelectorSelect>
        <SelectorOption value="1" className="option-class">
          選択肢1
        </SelectorOption>
      </SelectorSelect>,
    );

    const option = screen.getByText("選択肢1");
    expect(option).toHaveClass("option-class");
  });
});

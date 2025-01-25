import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Selector from "./selector";

describe("Selector コンポーネント", () => {
  it("正しい選択肢がレンダリングされる", () => {
    render(
      <Selector.Select data-testid="select">
        <Selector.Option value="1">選択肢1</Selector.Option>
        <Selector.Option value="2">選択肢2</Selector.Option>
        <Selector.Option value="3">選択肢3</Selector.Option>
      </Selector.Select>,
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
      <Selector.Select data-testid="select" defaultValue="">
        <Selector.Option value="">選択してください</Selector.Option>
        <Selector.Option value="1">選択肢1</Selector.Option>
        <Selector.Option value="2">選択肢2</Selector.Option>
        <Selector.Option value="3">選択肢3</Selector.Option>
      </Selector.Select>,
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
      <Selector.Select className="custom-class" data-testid="select">
        <Selector.Option value="1">選択肢1</Selector.Option>
      </Selector.Select>,
    );

    const select = screen.getByTestId("select");
    expect(select).toHaveClass("custom-class");
  });

  it("refが正しく適用される", () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(
      <Selector.Select ref={ref}>
        <Selector.Option value="1">選択肢1</Selector.Option>
      </Selector.Select>,
    );

    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it("選択肢に追加のクラス名が適用される", () => {
    render(
      <Selector.Select>
        <Selector.Option value="1" className="option-class">
          選択肢1
        </Selector.Option>
      </Selector.Select>,
    );

    const option = screen.getByText("選択肢1");
    expect(option).toHaveClass("option-class");
  });
});

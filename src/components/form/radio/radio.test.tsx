import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Radio from "./radio";


describe("Radio コンポーネント", () => {
  it("Radio.Group が正しくレンダリングされる", () => {
    render(
      <Radio.Group data-testid="radio-group">
        <Radio.Label>
          <Radio.Button name="test" />
          <span>ラジオボタン1</span>
        </Radio.Label>
        <Radio.Label>
          <Radio.Button name="test" />
          <span>ラジオボタン2</span>
        </Radio.Label>
        <Radio.Label>
          <Radio.Button name="test" />
          <span>ラジオボタン3</span>
        </Radio.Label>
      </Radio.Group>
    );

    // Radio.Group が存在することを確認
    const group = screen.getByTestId("radio-group");
    expect(group).toBeInTheDocument();

    // ラジオボタンが3つ表示されていることを確認
    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(3);
  });

  it("ラジオボタンの選択が正しく動作する", () => {
    render(
      <Radio.Group>
        <Radio.Label>
          <Radio.Button name="test" value="1" />
          <span>ラジオボタン1</span>
        </Radio.Label>
        <Radio.Label>
          <Radio.Button name="test" value="2" />
          <span>ラジオボタン2</span>
        </Radio.Label>
        <Radio.Label>
          <Radio.Button name="test" value="3" />
          <span>ラジオボタン3</span>
        </Radio.Label>
      </Radio.Group>
    );

    const radioButtons = screen.getAllByRole("radio");

    // 初期状態ではどのラジオボタンも選択されていないことを確認
    radioButtons.forEach((button) => {
      expect(button).not.toBeChecked();
    });

    // ラジオボタン1を選択
    fireEvent.click(radioButtons[0]);
    expect(radioButtons[0]).toBeChecked();

    // ラジオボタン2を選択すると、ラジオボタン1の選択が外れることを確認
    fireEvent.click(radioButtons[1]);
    expect(radioButtons[0]).not.toBeChecked();
    expect(radioButtons[1]).toBeChecked();
  });

  it("追加のクラス名が適用される", () => {
    render(
      <Radio.Group>
        <Radio.Label>
          <Radio.Button name="test" className="custom-class" />
          <span>ラジオボタン1</span>
        </Radio.Label>
      </Radio.Group>
    );

    const radioButton = screen.getByRole("radio");
    expect(radioButton).toHaveClass("custom-class");
  });

  it("Radio.Groupにrefが適用される", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Radio.Group ref={ref}>
        <Radio.Label>
          <Radio.Button name="test" />
          <span>ラジオボタン1</span>
        </Radio.Label>
      </Radio.Group>
    );

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("Radio.Buttonにrefが適用される", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <Radio.Group>
        <Radio.Label>
          <Radio.Button ref={ref} name="test" />
          <span>ラジオボタン1</span>
        </Radio.Label>
      </Radio.Group>
    );

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

});
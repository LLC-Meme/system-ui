import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { RadioGroup, RadioLabel, RadioButton } from "./radio";

describe("Radio コンポーネント", () => {
  it("Radio.Group が正しくレンダリングされる", () => {
    render(
      <RadioGroup data-testid="radio-group">
        <RadioLabel>
          <RadioButton name="test" />
          <span>ラジオボタン1</span>
        </RadioLabel>
        <RadioLabel>
          <RadioButton name="test" />
          <span>ラジオボタン2</span>
        </RadioLabel>
        <RadioLabel>
          <RadioButton name="test" />
          <span>ラジオボタン3</span>
        </RadioLabel>
      </RadioGroup>,
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
      <RadioGroup>
        <RadioLabel>
          <RadioButton name="test" value="1" />
          <span>ラジオボタン1</span>
        </RadioLabel>
        <RadioLabel>
          <RadioButton name="test" value="2" />
          <span>ラジオボタン2</span>
        </RadioLabel>
        <RadioLabel>
          <RadioButton name="test" value="3" />
          <span>ラジオボタン3</span>
        </RadioLabel>
      </RadioGroup>,
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
      <RadioGroup>
        <RadioLabel>
          <RadioButton name="test" className="custom-class" />
          <span>ラジオボタン1</span>
        </RadioLabel>
      </RadioGroup>,
    );

    const radioButton = screen.getByRole("radio");
    expect(radioButton).toHaveClass("custom-class");
  });

  it("Radio.Groupにrefが適用される", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <RadioGroup ref={ref}>
        <RadioLabel>
          <RadioButton name="test" />
          <span>ラジオボタン1</span>
        </RadioLabel>
      </RadioGroup>,
    );

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("Radio.Buttonにrefが適用される", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <RadioGroup>
        <RadioLabel>
          <RadioButton ref={ref} name="test" />
          <span>ラジオボタン1</span>
        </RadioLabel>
      </RadioGroup>,
    );

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

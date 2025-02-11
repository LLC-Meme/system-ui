import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RadioGroup from "./group";
import RadioLabel from "./label";
import RadioInput from "./input";
import RadioText from "./text";

describe("Radio コンポーネント", () => {
  it("Radio.Group が正しくレンダリングされる", () => {
    render(
      <RadioGroup data-testid="radio-group">
        <RadioLabel>
          <RadioInput name="test" />
          <RadioText>ラジオボタン1</RadioText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput name="test" />
          <RadioText>ラジオボタン2</RadioText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput name="test" />
          <RadioText>ラジオボタン3</RadioText>
        </RadioLabel>
      </RadioGroup>,
    );

    // Radio.Group が存在することを確認
    const group = screen.getByTestId("radio-group");
    expect(group).toBeInTheDocument();

    // ラジオボタンが3つ表示されていることを確認
    const RadioInputs = screen.getAllByRole("radio");
    expect(RadioInputs).toHaveLength(3);
  });

  it("ラジオボタンの選択が正しく動作する", () => {
    render(
      <RadioGroup>
        <RadioLabel>
          <RadioInput name="test" value="1" />
          <RadioText>ラジオボタン1</RadioText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput name="test" value="2" />
          <RadioText>ラジオボタン2</RadioText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput name="test" value="3" />
          <RadioText>ラジオボタン3</RadioText>
        </RadioLabel>
      </RadioGroup>,
    );

    const radioInputs = screen.getAllByRole("radio");

    // 初期状態ではどのラジオボタンも選択されていないことを確認
    radioInputs.forEach((button) => {
      expect(button).not.toBeChecked();
    });

    // ラジオボタン1を選択
    fireEvent.click(radioInputs[0]);
    expect(radioInputs[0]).toBeChecked();

    // ラジオボタン2を選択すると、ラジオボタン1の選択が外れることを確認
    fireEvent.click(radioInputs[1]);
    expect(radioInputs[0]).not.toBeChecked();
    expect(radioInputs[1]).toBeChecked();
  });

  it("追加のクラス名が適用される", () => {
    render(
      <RadioGroup>
        <RadioLabel>
          <RadioInput name="test" className="custom-class" />
          <RadioText>ラジオボタン1</RadioText>
        </RadioLabel>
      </RadioGroup>,
    );

    const radioInputs = screen.getByRole("radio");
    expect(radioInputs).toHaveClass("custom-class");
  });

  it("Radio.Groupにrefが適用される", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <RadioGroup ref={ref}>
        <RadioLabel>
          <RadioInput name="test" />
          <RadioText>ラジオボタン1</RadioText>
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
          <RadioInput ref={ref} name="test" />
          <RadioText>ラジオボタン1</RadioText>
        </RadioLabel>
      </RadioGroup>,
    );

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

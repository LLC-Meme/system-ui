import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Checkbox from "./checkbox";


const { Box, Label } = Checkbox;

describe("CheckboxコンポーネントのBox", () => {

  it("正しくcheckboxとしてレンダリングされる", () => {
    render(<Box data-testid="checkbox-box" />);
    const checkboxEl = screen.getByTestId("checkbox-box");

    // 要素が<input type="checkbox">であることを確認
    expect(checkboxEl).toBeInTheDocument();
    expect(checkboxEl).toHaveAttribute("type", "checkbox");

    // デフォルトのクラスが含まれていることを確認
    expect(checkboxEl).toHaveClass(
      "appearance-none",
      "cursor-pointer",
      "w-4",
      "h-4",
      "rounded-sm",
      "border-[1.5px]",
      "border-info",
      "hover",
      "disabled"
    );
  });

  it("classNameがマージされる", () => {
    render(<Box data-testid="checkbox-box" className="custom-class" />);
    const checkboxEl = screen.getByTestId("checkbox-box");
    expect(checkboxEl).toHaveClass("custom-class");
  });


  it("refを正しく受け取る", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Box ref={ref} data-testid="checkbox-box-ref" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });


  it("checked属性が反映される", () => {
    render(<Box data-testid="checkbox-checked" checked onChange={() => {}} />);
    const checkboxEl = screen.getByTestId("checkbox-checked") as HTMLInputElement;

    // checked が true になっていることを確認
    expect(checkboxEl.checked).toBe(true);
  });


  it("disabled属性が反映される", () => {
    render(<Box data-testid="checkbox-disabled" disabled />);
    const checkboxEl = screen.getByTestId("checkbox-disabled");
    expect(checkboxEl).toBeDisabled();
  });

  it("onChangeハンドラが呼ばれる", () => {
    const handleChange = vi.fn();
    render(<Box data-testid="checkbox-onchange" onChange={handleChange} />);
    const checkboxEl = screen.getByTestId("checkbox-onchange") as HTMLInputElement;

    fireEvent.click(checkboxEl);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});


describe("CheckboxコンポーネントのLabel", () => {
  it("labelとしてレンダリングされ、子要素が表示される", () => {
    render(<Label data-testid="checkbox-label">Hello Label</Label>);
    const labelEl = screen.getByTestId("checkbox-label");

    // 要素が<label>であることを確認
    expect(labelEl.tagName).toBe("LABEL");
    // テキストが表示される
    expect(labelEl).toHaveTextContent("Hello Label");
  });

  it("デフォルトクラスが含まれていることを確認", () => {
    render(<Label data-testid="checkbox-label-default">Label Text</Label>);
    const labelEl = screen.getByTestId("checkbox-label-default");

    // デフォルトクラス
    expect(labelEl).toHaveClass("cursor-pointer", "flex", "items-center", "gap-2", "hover");
  });

  it("classNameがマージされる", () => {
    render(<Label data-testid="checkbox-label-class" className="custom-label">Label w/ Custom</Label>);
    const labelEl = screen.getByTestId("checkbox-label-class");
    expect(labelEl).toHaveClass("custom-label");
  });

  it("refを正しく受け取る", () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref} data-testid="checkbox-label-ref">Ref Label</Label>);
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });
});
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Input from "./input";

describe("Input", () => {
  it("デフォルトのクラスでinputが表示される", () => {
    render(<Input data-testid="input-default" />);
    const inputEl = screen.getByTestId("input-default");

    // <input>要素
    expect(inputEl.tagName).toBe("INPUT");
    // デフォルトクラス
    expect(inputEl).toHaveClass(
      "min-w-40",
      "px-4",
      "py-2",
      "bg-surface",
      "rounded-lg",
      "outline-none",
      "border",
      "border-border",
      "focus:border-info",
      "placeholder:text-foreground-muted",
      "disabled",
    );
  });

  it("追加のclassNameが合わさる", () => {
    render(<Input data-testid="input-class" className="my-input" />);
    const inputEl = screen.getByTestId("input-class");
    expect(inputEl).toHaveClass("my-input");
  });

  it("ref要素", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} data-testid="input-ref" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("disabledが正しく設定される", () => {
    render(<Input data-testid="input-disabled" disabled />);
    const inputEl = screen.getByTestId("input-disabled") as HTMLInputElement;
    expect(inputEl.disabled).toBe(true);
  });

  it("入力時にonChangeが呼ばれる", () => {
    const handleChange = vi.fn();
    render(<Input data-testid="input-change" onChange={handleChange} />);
    const inputEl = screen.getByTestId("input-change") as HTMLInputElement;

    fireEvent.change(inputEl, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputEl.value).toBe("Hello");
  });
});

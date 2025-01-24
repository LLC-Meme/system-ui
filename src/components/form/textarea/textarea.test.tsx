import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Textarea from "./textarea";


describe("Textareaコンポーネント", () => {
  it("コンポーネントがレンダリングされる", () => {
    render(<Textarea data-testid="textarea" />);
    const textarea = screen.getByTestId("textarea");

    // Textareaが正しくレンダリングされているか確認
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("placeholderが正しく設定される", () => {
    render(<Textarea data-testid="textarea" placeholder="入力してください" />);
    const textarea = screen.getByTestId("textarea");

    // placeholderが設定されているか確認
    expect(textarea).toHaveAttribute("placeholder", "入力してください");
  });

  it("valueが正しく反映される", () => {
    render(<Textarea data-testid="textarea" value="初期値" readOnly />);
    const textarea = screen.getByTestId("textarea");

    // 初期値が反映されているか確認
    expect(textarea).toHaveValue("初期値");
  });

  it("onChangeイベントが正しく動作する", () => {
    const handleChange = vi.fn();
    render(<Textarea data-testid="textarea" onChange={handleChange} />);
    const textarea = screen.getByTestId("textarea");

    // 値を変更
    fireEvent.change(textarea, { target: { value: "新しい値" } });

    // onChangeが呼び出されることを確認
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(textarea).toHaveValue("新しい値");
  });

  it("disabled状態が正しく適用される", () => {
    render(<Textarea data-testid="textarea" disabled />);
    const textarea = screen.getByTestId("textarea");

    // disabled属性が適用されているか確認
    expect(textarea).toBeDisabled();
  });

  it("classNameが正しく適用される", () => {
    render(<Textarea data-testid="textarea" className="custom-class" />);
    const textarea = screen.getByTestId("textarea");

    // カスタムクラスが適用されているか確認
    expect(textarea).toHaveClass("custom-class");
  });

  it("refが正しく設定される", () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} data-testid="textarea" />);

    // refが正しく設定されているか確認
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });
});

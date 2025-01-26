import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ErrorMessage from "./error-message";

describe("ErrorMessage", () => {
  describe("ErrorMessageの基本的な動作", () => {
    it("デフォルトのclassで表示される", () => {
      // ErrorMessageがデフォルトのスタイルで正しく表示されるか確認する
      render(
        <ErrorMessage data-testid="error-message">
          エラーメッセージ
        </ErrorMessage>,
      );
      const errorEl = screen.getByTestId("error-message");

      // 確認: class名が適切か
      expect(errorEl).toHaveClass(
        "text-alert",
        "flex",
        "items-center",
        "text-sm",
        "font-medium",
      );
      // 確認: コンテンツが正しいか
      expect(errorEl).toHaveTextContent("エラーメッセージ");
    });

    it("追加されたclassも正しく適用される", () => {
      // ErrorMessageが追加のclassを持つ場合でも正しく適用されるか確認する
      render(
        <ErrorMessage
          data-testid="error-message"
          className="custom-error-class"
        >
          カスタムクラスのエラーメッセージ
        </ErrorMessage>,
      );
      const errorEl = screen.getByTestId("error-message");

      // 確認: デフォルトと追加のclassが両方適用されているか
      expect(errorEl).toHaveClass(
        "custom-error-class",
        "text-alert",
        "flex",
        "items-center",
        "text-sm",
        "font-medium",
      );
    });

    it("refが正しく適用される", () => {
      // refが正しく適用され、参照できるかを確認する
      const ref = React.createRef<HTMLDivElement>();
      render(<ErrorMessage ref={ref}>Ref Test</ErrorMessage>);

      // 確認: refが正しい要素を指しているか
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.tagName).toBe("DIV");
    });
  });
});

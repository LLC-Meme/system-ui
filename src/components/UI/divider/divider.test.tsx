import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HDivider from "./h-divider";
import VDivider from "./v-divider";

describe("Divider", () => {
  describe("Divider.V", () => {
    it("thickness(1px)をデフォルトで表示", () => {
      render(<VDivider data-testid="vertical-divider" />);
      const divider = screen.getByTestId("vertical-divider");

      // <hr>要素であることを確認
      expect(divider.tagName).toBe("HR");
      // デフォルトのthickness(1)が適用されていることを確認
      expect(divider).toHaveStyle({ width: "1px" });
      // デフォルトのクラスが適用されていることを確認
      expect(divider).toHaveClass("h-full", "bg-border", "rounded-full");
    });

    it("thicknessをカスタムで表示", () => {
      render(<VDivider thickness={3} data-testid="vertical-divider" />);
      const divider = screen.getByTestId("vertical-divider");

      // カスタムのthicknessが適用されていることを確認
      expect(divider).toHaveStyle({ width: "3px" });
    });

    it("追加のclassNameとstyleを適用", () => {
      render(
        <VDivider
          data-testid="vertical-divider"
          className="custom-class"
          style={{ borderStyle: "dashed" }}
        />,
      );

      const divider = screen.getByTestId("vertical-divider");
      // 追加のclassNameが適用されていることを確認
      expect(divider).toHaveClass("custom-class");
      // 追加のstyleが適用されていることを確認
      expect(divider).toHaveStyle({ borderStyle: "dashed" });
    });

    it("refが正しく設定されている", () => {
      const ref = React.createRef<HTMLHRElement>();
      render(<VDivider ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLHRElement);
    });
  });

  describe("Divider.H", () => {
    it("thickness(1px)をデフォルトで表示", () => {
      render(<HDivider data-testid="horizontal-divider" />);
      const divider = screen.getByTestId("horizontal-divider");

      // <hr>要素であることを確認
      expect(divider.tagName).toBe("HR");
      // デフォルトのthickness(2)が適用されている
      expect(divider).toHaveStyle({ height: "1px" });
      // デフォルトのクラスが適用されている
      expect(divider).toHaveClass("bg-border", "rounded-full");
    });

    it("thicknessをカスタムで表示", () => {
      render(<HDivider thickness={1} data-testid="horizontal-divider" />);
      const divider = screen.getByTestId("horizontal-divider");

      // カスタムのthickness(1)が適用されている
      expect(divider).toHaveStyle({ height: "1px" });
    });

    it("追加のclassNameとstyleを適用", () => {
      render(
        <HDivider
          data-testid="horizontal-divider"
          className="custom-class"
          style={{ borderStyle: "dashed" }}
        />,
      );
      const divider = screen.getByTestId("horizontal-divider");

      // 追加のclassNameが適用されている
      expect(divider).toHaveClass("custom-class");
      // 追加のstyleが適用されている
      expect(divider).toHaveStyle({ borderStyle: "dashed" });
    });

    it("refが正しく設定されている", () => {
      const ref = React.createRef<HTMLHRElement>();
      render(<HDivider ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLHRElement);
    });
  });
});

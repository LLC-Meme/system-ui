import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Divider from "./divider";



describe("Divider", () => {


  describe("Divider.V", () => {
    it("thickness(2px)をデフォルトで表示", () => {
      render(<Divider.V data-testid="vertical-divider" />);
      const divider = screen.getByTestId("vertical-divider");

      // <hr>要素であることを確認
      expect(divider.tagName).toBe("HR");
      // デフォルトのthickness(2)が適用されていることを確認
      expect(divider).toHaveStyle({ width: "2px" });
      // デフォルトのクラスが適用されていることを確認
      expect(divider).toHaveClass("h-full", "bg-border", "rounded-full");
    });

    it("thicknessをカスタムで表示", () => {
      render(<Divider.V thickness={3} data-testid="vertical-divider" />);
      const divider = screen.getByTestId("vertical-divider");

      // カスタムのthicknessが適用されていることを確認
      expect(divider).toHaveStyle({ width: "3px" });
    });

    it("追加のclassNameとstyleを適用", () => {
      render(
        <Divider.V
          data-testid="vertical-divider"
          className="custom-class"
          style={{ borderStyle: "dashed" }}
        />
      );

      const divider = screen.getByTestId("vertical-divider");
      // 追加のclassNameが適用されていることを確認
      expect(divider).toHaveClass("custom-class");
      // 追加のstyleが適用されていることを確認
      expect(divider).toHaveStyle({ borderStyle: "dashed" });
    });
  });



  describe("Divider.H", () => {
    it("thickness(2px)をデフォルトで表示", () => {
      render(<Divider.H data-testid="horizontal-divider" />);
      const divider = screen.getByTestId("horizontal-divider");

      // <hr>要素であることを確認
      expect(divider.tagName).toBe("HR");
      // デフォルトのthickness(2)が適用されている
      expect(divider).toHaveStyle({ height: "2px" });
      // デフォルトのクラスが適用されている
      expect(divider).toHaveClass("w-full", "bg-border", "rounded-full");
    });

    it("thicknessをカスタムで表示", () => {
      render(<Divider.H thickness={1} data-testid="horizontal-divider" />);
      const divider = screen.getByTestId("horizontal-divider");

      // カスタムのthickness(1)が適用されている
      expect(divider).toHaveStyle({ height: "1px" });
    });

    it("追加のclassNameとstyleを適用", () => {
      render(
        <Divider.H
          data-testid="horizontal-divider"
          className="custom-class"
          style={{ borderStyle: "dashed" }}
        />
      );
      const divider = screen.getByTestId("horizontal-divider");

      // 追加のclassNameが適用されている
      expect(divider).toHaveClass("custom-class");
      // 追加のstyleが適用されている
      expect(divider).toHaveStyle({ borderStyle: "dashed" });
    });


  });
});
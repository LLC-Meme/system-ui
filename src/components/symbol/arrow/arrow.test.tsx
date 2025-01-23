import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Arrow from "./arrow";


describe("Arrow", () => {

  describe("Arrow.Left", () => {
    it("Arrow.LeftがSVGとして表示", () => {
      render(<Arrow.Left data-testid="arrow-left" />);
      const arrowEl = screen.getByTestId("arrow-left");
      expect(arrowEl).toBeInTheDocument();
      expect(arrowEl.tagName).toBe("svg");
    });

    it("属性が正しい", () => {
      render(<Arrow.Left data-testid="arrow-left" />);
      const arrowEl = screen.getByTestId("arrow-left");
      expect(arrowEl).toHaveAttribute("width", "4");
      expect(arrowEl).toHaveAttribute("height", "6");
      expect(arrowEl).toHaveAttribute("viewBox", "0 0 4 6");
    });

    it("pathが正しい", () => {
      render(<Arrow.Left data-testid="arrow-left" />);
      const pathElement = screen.getByTestId("arrow-left").querySelector("path");
      expect(pathElement).toHaveAttribute("d", "M3.705 5.295L1.415 3L3.705 0.705L3 0L0 3L3 6L3.705 5.295Z");
    });


    it("refが正しく設定されている", () => {
      const ref = React.createRef<SVGSVGElement>();
      render(<Arrow.Left ref={ref} />);
      expect(ref.current).toBeInstanceOf(SVGSVGElement);
    });

  });


  describe("Arrow.Right", () => {
    it("Arrow.RightがSVGとして表示", () => {
      render(<Arrow.Right data-testid="arrow-right" />);
      const arrowEl = screen.getByTestId("arrow-right");
      expect(arrowEl).toBeInTheDocument();
      expect(arrowEl.tagName).toBe("svg");
    });

    it("属性が正しい", () => {
      render(<Arrow.Right data-testid="arrow-right" />);
      const arrowEl = screen.getByTestId("arrow-right");
      expect(arrowEl).toHaveAttribute("width", "4");
      expect(arrowEl).toHaveAttribute("height", "6");
      expect(arrowEl).toHaveAttribute("viewBox", "0 0 4 6");
    });

    it("pathが正しい", () => {
      render(<Arrow.Right data-testid="arrow-right" />);
      const pathElement = screen.getByTestId("arrow-right").querySelector("path");
      expect(pathElement).toHaveAttribute("d", "M0.294998 5.295L2.585 3L0.294998 0.705L0.999998 0L4 3L0.999998 6L0.294998 5.295Z");
    });


    it("refが正しく設定されている", () => {
      const ref = React.createRef<SVGSVGElement>();
      render(<Arrow.Right ref={ref} />);
      expect(ref.current).toBeInstanceOf(SVGSVGElement);
    });

  });


});
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Cross from "./cross";


describe('Cross', () => {

  it('CrossがSVGとして表示', () => {
    render(<Cross data-testid="cross" />);
    const crossEl = screen.getByTestId("cross");
    expect(crossEl).toBeInTheDocument();
    expect(crossEl.tagName).toBe("svg");
  });

  it('属性が正しい', () => {
    render(<Cross data-testid="cross" />);
    const crossEl = screen.getByTestId("cross");
    expect(crossEl).toHaveAttribute("width", "8");
    expect(crossEl).toHaveAttribute("height", "8");
    expect(crossEl).toHaveAttribute("viewBox", "0 0 8 8");
  });

  it('pathが正しい', () => {
    render(<Cross data-testid="cross" />);
    const pathElement = screen.getByTestId("cross").querySelector("path");
    expect(pathElement).toHaveAttribute("d", "M6.79467 0.229334L3.966 3.05733L1.138 0.229334L0.195335 1.172L3.02334 4L0.195335 6.828L1.138 7.77067L3.966 4.94267L6.79467 7.77067L7.73734 6.828L4.90934 4L7.73734 1.172L6.79467 0.229334Z");
  });

  it('refが正しく設定されている', () => {
    const ref = React.createRef<SVGSVGElement>();
    render(<Cross ref={ref} />);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

});

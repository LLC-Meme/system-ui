import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Spacer from "./spacer";

const { V, H } = Spacer;

describe("Spacer.V", () => {
  it("表示される", () => {
    render(<V data-testid="spacer-v" />);
    expect(screen.getByTestId("spacer-v")).toBeInTheDocument();
  });

  it("デフォルト(unit=1)で'h-4'が適用", () => {
    render(<V data-testid="spacer-v" />);
    const spacerEl = screen.getByTestId("spacer-v");
    expect(spacerEl).toHaveClass("h-4");
  });

  it("unit=3で'h-12'が適用される", () => {
    render(<V data-testid="spacer-v" unit={3} />);
    const spacerEl = screen.getByTestId("spacer-v");
    expect(spacerEl).toHaveClass("h-12");
  });

  it("デフォルトと追加のclassが適用", () => {
    render(<V data-testid="spacer-v" className="custom-class" unit={2} />);
    const spacerEl = screen.getByTestId("spacer-v");

    expect(spacerEl).toHaveClass("custom-class", "h-8");
  });

  it("refが適用", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<V ref={ref} data-testid="spacer-v" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("Spacer.H", () => {
  it("表示される", () => {
    render(<H data-testid="spacer-h" />);
    expect(screen.getByTestId("spacer-h")).toBeInTheDocument();
  });

  it("デフォルト(unit=1)で'w-4'が適用", () => {
    render(<H data-testid="spacer-h" />);
    const spacerEl = screen.getByTestId("spacer-h");
    expect(spacerEl).toHaveClass("w-4");
  });

  it("unit=5で'h-20'が適用される", () => {
    render(<H data-testid="spacer-h" unit={5} />);
    const spacerEl = screen.getByTestId("spacer-h");
    expect(spacerEl).toHaveClass("w-20");
  });

  it("デフォルトと追加のclassが適用", () => {
    render(<H data-testid="spacer-h" className="custom-h" unit={2} />);
    const spacerEl = screen.getByTestId("spacer-h");
    expect(spacerEl).toHaveClass("custom-h", "w-8");
  });

  it("refが適用", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<H ref={ref} data-testid="spacer-h" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

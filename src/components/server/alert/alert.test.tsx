import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Alert } from "./alert";

describe("Alert", () => {
  it("個要素とともに表示される", () => {
    render(<Alert variant="info">This is an info alert</Alert>);
    expect(screen.getByText("This is an info alert")).toBeInTheDocument();
  });

  it("'info'が適用される'", () => {
    render(<Alert variant="info">Info Variant</Alert>);
    const alertEl = screen.getByText("Info Variant");
    expect(alertEl).toHaveClass("bg-info-muted", "text-info");
  });

  it("'success'が適用される'", () => {
    render(<Alert variant="success">Success Variant</Alert>);
    const alertEl = screen.getByText("Success Variant");
    expect(alertEl).toHaveClass("bg-success-muted", "text-success");
  });

  it("'warning'が適用される'", () => {
    render(<Alert variant="warning">Warning Variant</Alert>);
    const alertEl = screen.getByText("Warning Variant");
    expect(alertEl).toHaveClass("bg-warning-muted", "text-warning");
  });

  it("'danger'が適用される'", () => {
    render(<Alert variant="danger">Danger Variant</Alert>);
    const alertEl = screen.getByText("Danger Variant");
    expect(alertEl).toHaveClass("bg-alert-muted", "text-alert");
  });

  it("追加のclassNameを指定", () => {
    render(
      <Alert variant="info" className="custom-class">
        Custom Class
      </Alert>,
    );
    const alertEl = screen.getByText("Custom Class");
    expect(alertEl).toHaveClass("custom-class", "bg-info-muted", "text-info");
  });

  it("refが正しく設定されている", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Alert ref={ref} variant="info">
        Ref Test
      </Alert>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.textContent).toBe("Ref Test");
  });
});

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Badge from "./badge";


describe("Badge", () => {

  it("Badgeを表示", () => {
    render(<Badge color="yellow">Hello Badge!</Badge>);
    expect(screen.getByText('Hello Badge!')).toBeInTheDocument();
  });


  it("colorを指定", () => {
    render(<Badge color="blue">Blue Badge</Badge>);
    const badgeEl = screen.getByText('Blue Badge');
    expect(badgeEl).toHaveClass("bg-info-muted", "text-info");
  });


  it("追加のclassNameを指定", () => {
    render(<Badge color="red" className="test-class">Custom Class</Badge>);
    const badgeEl = screen.getByText("Custom Class");
    expect(badgeEl).toHaveClass("test-class", "bg-alert-muted", "text-alert");
  });


  it("refが正しく設定されている", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Badge ref={ref} color="pink">Ref Test</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.textContent).toBe("Ref Test");
  });

});

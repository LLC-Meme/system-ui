import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./button";


describe("Button", () => {

  it("Buttonを表示", () => {
    render(<Button>ボタン</Button>);
    expect(screen.getByText("ボタン")).toBeInTheDocument();
  });


  it("デフォルトのvariant('default')が適用", () => {
    render(<Button>デフォルト</Button>);
    const buttonElement = screen.getByText("デフォルト");
    expect(buttonElement).toHaveClass("bg-info", "text-on-status");
  });


  it("variant('default')が適用", () => {
    render(<Button variant="default">デフォルト</Button>);
    const buttonElement = screen.getByText("デフォルト");
    expect(buttonElement).toHaveClass("bg-info", "text-on-status");
  });


  it("variant('danger')が適用", () => {
    render(<Button variant="danger">デンジャー</Button>);
    const buttonElement = screen.getByText("デンジャー");
    expect(buttonElement).toHaveClass("bg-alert", "text-on-status");
  });


  it("variant('outline')が適用", () => {
    render(<Button variant="outline">アウトライン</Button>);
    const buttonElement = screen.getByText("アウトライン");
    expect(buttonElement).toHaveClass("border", "border-info", "text-info");
  });


  it("追加のclassNameを指定", () => {
    render(<Button className="test-class">カスタムクラス</Button>);
    const buttonElement = screen.getByText("カスタムクラス");
    expect(buttonElement).toHaveClass("test-class");
  });


  it("デフォルトでbutton要素が使われる", () => {
    render(<Button>button要素</Button>);
    const buttonElement = screen.getByText("button要素");
    expect(buttonElement.tagName).toBe("BUTTON");
  });


  it("asChildをtrueにするとbutton要素以外が使われる", () => {
    render(
      <Button asChild data-testid="child-element">
        <a href="#">a要素</a>
      </Button>
    );
    const childElement = screen.getByTestId("child-element");
    expect(childElement.tagName).not.toBe("BUTTON");
    expect(childElement.tagName).toBe("A");
    expect(childElement).toHaveAttribute("href", "#");
  });


});
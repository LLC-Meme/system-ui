import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BreadcrumbContainer from "./container";
import BreadcrumbItem from "./item";
import BreadcrumbSeparator from "./separator";

describe("Breadcrumb", () => {
  describe("Container", () => {
    it("正しいclassNameでol要素を表示", () => {
      render(
        <BreadcrumbContainer>
          <li data-testid="child">Child Node</li>
        </BreadcrumbContainer>,
      );
      const childEl = screen.getByTestId("child");
      const containerEl = childEl.closest("ol");
      expect(containerEl).toHaveClass("flex", "gap-2");
    });

    it("ol配下に個を表示", () => {
      render(
        <BreadcrumbContainer>
          <li data-testid="child-1">Child 1</li>
          <li data-testid="child-2">Child 2</li>
        </BreadcrumbContainer>,
      );
      expect(screen.getByTestId("child-1")).toBeInTheDocument();
      expect(screen.getByTestId("child-2")).toBeInTheDocument();
    });

    it("refが正しく設定されている", () => {
      const ref = React.createRef<HTMLOListElement>();
      render(
        <BreadcrumbContainer ref={ref}>
          <li>Ref Test</li>
        </BreadcrumbContainer>,
      );
      expect(ref.current).toBeInstanceOf(HTMLOListElement);
      expect(ref.current?.textContent).toBe("Ref Test");
    });
  });

  describe("Item", () => {
    it("'list-none'のli要素の中にa要素がデフォルトで表示", () => {
      render(<BreadcrumbItem>Breadcrumb Item</BreadcrumbItem>);
      const linkEl = screen.getByText("Breadcrumb Item");
      const liEl = linkEl.closest("li");
      expect(liEl).toHaveClass("list-none");
      expect(linkEl.tagName).toBe("A");
      expect(linkEl).toHaveClass(
        "text-info",
        "text-sm",
        "hover:cursor-pointer",
      );
    });

    it("currentがfalseの場合、'hover:underline'が適用され、'font-semibold'が適用されない", () => {
      render(<BreadcrumbItem>Not Current</BreadcrumbItem>);
      const linkEl = screen.getByText("Not Current");
      expect(linkEl).toHaveClass("hover:underline");
      expect(linkEl).not.toHaveClass("font-semibold");
    });

    it("currentがtrueの場合、'font-semibold'が適用され、'hover:underline'が適用されない", () => {
      render(<BreadcrumbItem current>Current Item</BreadcrumbItem>);
      const linkEl = screen.getByText("Current Item");
      expect(linkEl).toHaveClass("font-semibold");
      expect(linkEl).not.toHaveClass("hover:underline");
    });

    it("asChildがtrueの場合、デフォルトのa要素の代わりに子要素を表示", () => {
      render(
        <BreadcrumbItem asChild>
          <span data-testid="custom-span">Custom Content</span>
        </BreadcrumbItem>,
      );
      const customEl = screen.getByTestId("custom-span");
      expect(customEl.tagName).toBe("SPAN");
      expect(customEl).toHaveTextContent("Custom Content");
      expect(customEl).toHaveClass(
        "text-info",
        "text-sm",
        "hover:cursor-pointer",
      );
    });

    it("href属性が指定された場合、a要素にhref属性が設定される", () => {
      render(
        <BreadcrumbItem href="#" data-testid="link-prop">
          Link Test
        </BreadcrumbItem>,
      );
      const linkEl = screen.getByTestId("link-prop");
      expect(linkEl).toHaveAttribute("href", "#");
    });

    it("refが正しく設定されている", () => {
      const ref = React.createRef<HTMLLIElement>();
      render(<BreadcrumbItem ref={ref}>Ref Test</BreadcrumbItem>);
      expect(ref.current).toBeInstanceOf(HTMLLIElement);
      expect(ref.current?.textContent).toBe("Ref Test");
    });
  });

  describe("Separator", () => {
    it("正しいclassNameで表示", () => {
      render(<BreadcrumbSeparator />);
      const sepEl = screen.getByLabelText("breadcrumb-separator");
      expect(sepEl).toHaveClass("color-foreground", "w-3", "h-3");
    });
  });
});

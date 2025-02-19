import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HeaderContainer from "./container";
import HeaderSidebarController from "./sidebar-controller";

describe("Header", () => {
  describe("Container", () => {
    it("<header>要素がデフォルトのクラスで表示", () => {
      render(
        <HeaderContainer data-testid="header-container">
          <p>Header Content</p>
        </HeaderContainer>,
      );
      const headerEl = screen.getByTestId("header-container");

      // <header>要素
      expect(headerEl.tagName).toBe("HEADER");
      // デフォルトクラス
      expect(headerEl).toHaveClass(
        "fixed",
        "inset-0",
        "h-16",
        "px-6",
        "flex",
        "items-center",
        "bg-surface",
        "border-b",
        "border-border",
        "z-20",
      );
      // 子要素の内容
      expect(headerEl).toHaveTextContent("Header Content");
    });

    it("refを渡す", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <HeaderContainer ref={ref} data-testid="header-container-ref">
          <p>Header Content</p>
        </HeaderContainer>,
      );
      expect(ref.current?.tagName).toBe("HEADER");
    });
  });

  describe("SidebarController", () => {
    it("<button>要素をデフォルトのクラスで表示", () => {
      render(
        <HeaderSidebarController
          onClick={() => {}}
          data-testid="sidebar-button"
        />,
      );
      const buttonEl = screen.getByTestId("sidebar-button");

      expect(buttonEl.tagName).toBe("BUTTON");
      expect(buttonEl).toHaveClass("hover");
    });

    it("クリックした時にonClickが呼ばれる", () => {
      const handleClick = vi.fn();
      render(
        <HeaderSidebarController
          onClick={handleClick}
          data-testid="sidebar-button"
        />,
      );

      fireEvent.click(screen.getByTestId("sidebar-button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("refを渡す", () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<HeaderSidebarController ref={ref} onClick={() => {}} />);
      expect(ref.current?.tagName).toBe("BUTTON");
    });
  });
});

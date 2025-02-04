import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  ThemeContainer,
  ThemeLight,
  ThemeDark,
  ThemeSystem,
} from "./theme-switch";

describe("ThemeSwitch", () => {
  describe("ThemeSwitch.Container", () => {
    it("renders children correctly", () => {
      // コンテナが子要素を正しくレンダリングするかを確認する
      render(
        <ThemeContainer data-testid="theme-container">
          <div>Child Element</div>
        </ThemeContainer>,
      );
      const containerEl = screen.getByTestId("theme-container");

      // 確認: 子要素がレンダリングされているか
      expect(containerEl).toHaveTextContent("Child Element");

      // 確認: デフォルトのclassが適用されているか
      expect(containerEl).toHaveClass(
        "p-[2px]",
        "flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "border",
        "border-info",
      );
    });
  });

  describe("ThemeSwitch.Light", () => {
    it("renders with correct aria-label and icon", () => {
      // Lightテーマのボタンが正しくレンダリングされるかを確認する
      render(<ThemeLight data-testid="light-button" current />);
      const buttonEl = screen.getByTestId("light-button");

      // 確認: aria-labelが正しいか
      expect(buttonEl).toHaveAttribute("aria-label", "light-theme");

      // 確認: 正しいclassが適用されているか
      expect(buttonEl).toHaveClass(
        "bg-info",
        "text-on-status",
        "w-8",
        "h-8",
        "center",
        "rounded-full",
      );
    });

    it("triggers onClick event when clicked", () => {
      // onClickイベントが正しくトリガーされるかを確認する
      const handleClick = vi.fn();
      render(<ThemeLight data-testid="light-button" onClick={handleClick} />);

      const buttonEl = screen.getByTestId("light-button");
      fireEvent.click(buttonEl);

      // 確認: イベントが呼び出されたか
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("ThemeSwitch.Dark", () => {
    it("renders with correct aria-label and icon", () => {
      // Darkテーマのボタンが正しくレンダリングされるかを確認する
      render(<ThemeDark data-testid="dark-button" current={false} />);
      const buttonEl = screen.getByTestId("dark-button");

      // 確認: aria-labelが正しいか
      expect(buttonEl).toHaveAttribute("aria-label", "dark-theme");

      // 確認: 正しいclassが適用されているか
      expect(buttonEl).toHaveClass(
        "bg-none",
        "text-info",
        "w-8",
        "h-8",
        "center",
        "rounded-full",
      );
    });
  });

  describe("ThemeSwitch.System", () => {
    it("renders with correct aria-label and icon", () => {
      // Systemテーマのボタンが正しくレンダリングされるかを確認する
      render(<ThemeSystem data-testid="system-button" />);
      const buttonEl = screen.getByTestId("system-button");

      // 確認: aria-labelが正しいか
      expect(buttonEl).toHaveAttribute("aria-label", "system-theme");

      // 確認: 正しいclassが適用されているか
      expect(buttonEl).toHaveClass(
        "bg-none",
        "text-info",
        "w-8",
        "h-8",
        "center",
        "rounded-full",
      );
    });

    it("triggers onClick event when clicked", () => {
      // onClickイベントが正しくトリガーされるかを確認する
      const handleClick = vi.fn();
      render(<ThemeSystem data-testid="system-button" onClick={handleClick} />);

      const buttonEl = screen.getByTestId("system-button");
      fireEvent.click(buttonEl);

      // 確認: イベントが呼び出されたか
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});

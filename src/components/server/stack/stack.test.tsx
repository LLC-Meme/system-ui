import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Stack from "./stack";

const { V, H } = Stack;

describe("Stackコンポーネント", () => {
  describe("Stack.Vコンポーネント(縦スタック)", () => {
    it("デフォルトでgap=noneの場合はgap-0クラスになる", () => {
      render(<V data-testid="stack-v-default">内容</V>);
      const stackEl = screen.getByTestId("stack-v-default");
      // デフォルト gap = none => gap-0
      expect(stackEl).toHaveClass("flex", "flex-col", "gap-0");
    });

    it("gap=mdの場合、gap-8クラスが適用される", () => {
      render(
        <V data-testid="stack-v-md" gap="md">
          内容
        </V>,
      );
      const stackEl = screen.getByTestId("stack-v-md");
      // gapMap.md = 8 => gap-8
      expect(stackEl).toHaveClass("flex-col", "gap-8");
    });

    it("追加のclassNameが合わさる", () => {
      render(
        <V data-testid="stack-v-custom" className="custom-stack" gap="sm">
          内容
        </V>,
      );
      const stackEl = screen.getByTestId("stack-v-custom");
      // gap=sm => gap-4
      expect(stackEl).toHaveClass("custom-stack", "gap-4", "flex-col");
    });

    it("refを正しくforwardする", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <V ref={ref} data-testid="stack-v-ref">
          内容
        </V>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe("Stack.Hコンポーネント(横スタック)", () => {
    it("デフォルトでgap=noneの場合はgap-0クラスになる", () => {
      render(<H data-testid="stack-h-default">内容</H>);
      const stackEl = screen.getByTestId("stack-h-default");
      // デフォルト gap = none => gap-0
      expect(stackEl).toHaveClass("flex", "gap-0");
    });

    it("gap=lgの場合、gap-12クラスが適用される", () => {
      render(
        <H data-testid="stack-h-lg" gap="lg">
          内容
        </H>,
      );
      const stackEl = screen.getByTestId("stack-h-lg");
      // gapMap.lg = 12 => gap-12
      expect(stackEl).toHaveClass("gap-12");
    });

    it("追加のclassNameが合わさる", () => {
      render(
        <H data-testid="stack-h-custom" className="another-stack" gap="xs">
          内容
        </H>,
      );
      const stackEl = screen.getByTestId("stack-h-custom");
      // gap=xs => gap-2
      expect(stackEl).toHaveClass("another-stack", "gap-2", "flex");
    });

    it("refを正しくforwardする", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <H ref={ref} data-testid="stack-h-ref">
          内容
        </H>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });
});

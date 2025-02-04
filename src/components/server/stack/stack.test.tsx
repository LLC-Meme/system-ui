import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HStack, VStack } from "./stack";

describe("Stackコンポーネント", () => {
  describe("Stack.Vコンポーネント(縦スタック)", () => {
    it("デフォルトでgap=noneの場合はgap-0クラスになる", () => {
      render(<VStack data-testid="stack-v-default">内容</VStack>);
      const stackEl = screen.getByTestId("stack-v-default");
      // デフォルト gap = none => gap-0
      expect(stackEl).toHaveClass("flex", "flex-col", "gap-0");
    });

    it("gap=mdの場合、gap-8クラスが適用される", () => {
      render(
        <VStack data-testid="stack-v-md" gap="md">
          内容
        </VStack>,
      );
      const stackEl = screen.getByTestId("stack-v-md");
      // gapMap.md = 8 => gap-8
      expect(stackEl).toHaveClass("flex-col", "gap-8");
    });

    it("追加のclassNameが合わさる", () => {
      render(
        <VStack data-testid="stack-v-custom" className="custom-stack" gap="sm">
          内容
        </VStack>,
      );
      const stackEl = screen.getByTestId("stack-v-custom");
      // gap=sm => gap-4
      expect(stackEl).toHaveClass("custom-stack", "gap-4", "flex-col");
    });

    it("refを正しくforwardする", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <VStack ref={ref} data-testid="stack-v-ref">
          内容
        </VStack>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe("Stack.Hコンポーネント(横スタック)", () => {
    it("デフォルトでgap=noneの場合はgap-0クラスになる", () => {
      render(<HStack data-testid="stack-h-default">内容</HStack>);
      const stackEl = screen.getByTestId("stack-h-default");
      // デフォルト gap = none => gap-0
      expect(stackEl).toHaveClass("flex", "gap-0");
    });

    it("gap=lgの場合、gap-12クラスが適用される", () => {
      render(
        <HStack data-testid="stack-h-lg" gap="lg">
          内容
        </HStack>,
      );
      const stackEl = screen.getByTestId("stack-h-lg");
      // gapMap.lg = 12 => gap-12
      expect(stackEl).toHaveClass("gap-12");
    });

    it("追加のclassNameが合わさる", () => {
      render(
        <HStack data-testid="stack-h-custom" className="another-stack" gap="xs">
          内容
        </HStack>,
      );
      const stackEl = screen.getByTestId("stack-h-custom");
      // gap=xs => gap-2
      expect(stackEl).toHaveClass("another-stack", "gap-2", "flex");
    });

    it("refを正しくforwardする", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <HStack ref={ref} data-testid="stack-h-ref">
          内容
        </HStack>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });
});

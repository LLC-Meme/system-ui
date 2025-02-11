import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PageTitle from "./page-title";
import SectionTitle from "./section-title";
import BlockTitle from "./block-title";

describe("Title", () => {
  describe("PageTitle", () => {
    it("h1要素がデフォルトのclassで表示", () => {
      render(<PageTitle data-testid="title-page">Hello Page</PageTitle>);
      const titleEl = screen.getByTestId("title-page");

      expect(titleEl.tagName).toBe("H1");
      expect(titleEl).toHaveClass("text-xl", "font-bold", "text-foreground");
      expect(titleEl).toHaveTextContent("Hello Page");
    });

    it("デフォルトと追加のclassが両方適用", () => {
      render(
        <PageTitle data-testid="title-page" className="custom-page-class">
          With Custom Class
        </PageTitle>,
      );
      const titleEl = screen.getByTestId("title-page");
      expect(titleEl).toHaveClass(
        "custom-page-class",
        "text-xl",
        "font-bold",
        "text-foreground",
      );
    });

    it("refが適用", () => {
      const ref = React.createRef<HTMLHeadingElement>();
      render(<PageTitle ref={ref}>Ref Test</PageTitle>);
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(ref.current?.tagName).toBe("H1");
    });
  });

  describe("SectionTitle", () => {
    it("h1要素がデフォルトのclassで表示", () => {
      render(
        <SectionTitle data-testid="title-section">Hello Section</SectionTitle>,
      );
      const titleEl = screen.getByTestId("title-section");

      expect(titleEl.tagName).toBe("H2");
      expect(titleEl).toHaveClass("text-lg", "font-bold", "text-foreground");
      expect(titleEl).toHaveTextContent("Hello Section");
    });

    it("デフォルトと追加のclassが両方適用", () => {
      render(
        <SectionTitle
          data-testid="title-section"
          className="custom-section-class"
        >
          With Custom Class
        </SectionTitle>,
      );
      const titleEl = screen.getByTestId("title-section");
      expect(titleEl).toHaveClass(
        "custom-section-class",
        "text-lg",
        "font-bold",
        "text-foreground",
      );
    });

    it("refが適用", () => {
      const ref = React.createRef<HTMLHeadingElement>();
      render(<SectionTitle ref={ref}>Ref Test</SectionTitle>);
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(ref.current?.tagName).toBe("H2");
    });
  });

  describe("BlockTitle", () => {
    it("h3要素がデフォルトのclassで表示", () => {
      render(<BlockTitle data-testid="title-block">Hello Block</BlockTitle>);
      const titleEl = screen.getByTestId("title-block");

      expect(titleEl.tagName).toBe("H3");
      expect(titleEl).toHaveClass("text-md", "font-bold", "text-foreground");
      expect(titleEl).toHaveTextContent("Hello Block");
    });

    it("デフォルトと追加のclassが両方適用", () => {
      render(
        <BlockTitle data-testid="title-block" className="custom-block-class">
          With Custom Class
        </BlockTitle>,
      );
      const titleEl = screen.getByTestId("title-block");
      expect(titleEl).toHaveClass(
        "custom-block-class",
        "text-md",
        "font-bold",
        "text-foreground",
      );
    });

    it("refが適用", () => {
      const ref = React.createRef<HTMLHeadingElement>();
      render(<BlockTitle ref={ref}>Ref Test</BlockTitle>);
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(ref.current?.tagName).toBe("H3");
    });
  });
});

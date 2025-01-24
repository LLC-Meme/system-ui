import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Title from "./title";


const { Page, Section, Block } = Title;

describe("Title", () => {

  describe("PageTitle", () => {

    it("h1要素がデフォルトのclassで表示", () => {
      render(<Page data-testid="title-page">Hello Page</Page>);
      const titleEl = screen.getByTestId("title-page");

      expect(titleEl.tagName).toBe("H1");
      expect(titleEl).toHaveClass("text-xl", "font-bold", "text-foreground");
      expect(titleEl).toHaveTextContent("Hello Page");
    });

    it("デフォルトと追加のclassが両方適用", () => {
      render(
        <Page data-testid="title-page" className="custom-page-class">
          With Custom Class
        </Page>
      );
      const titleEl = screen.getByTestId("title-page");
      expect(titleEl).toHaveClass("custom-page-class", "text-xl", "font-bold", "text-foreground");
    });

    it("refが適用", () => {
      const ref = React.createRef<HTMLHeadingElement>();
      render(<Page ref={ref}>Ref Test</Page>);
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(ref.current?.tagName).toBe("H1");
    });
  });


  describe("SectionTitle", () => {
    it("h1要素がデフォルトのclassで表示", () => {
      render(<Section data-testid="title-section">Hello Section</Section>);
      const titleEl = screen.getByTestId("title-section");

      expect(titleEl.tagName).toBe("H2");
      expect(titleEl).toHaveClass("text-lg", "font-bold", "text-foreground");
      expect(titleEl).toHaveTextContent("Hello Section");
    });

    it("デフォルトと追加のclassが両方適用", () => {
      render(
        <Section data-testid="title-section" className="custom-section-class">
          With Custom Class
        </Section>
      );
      const titleEl = screen.getByTestId("title-section");
      expect(titleEl).toHaveClass("custom-section-class", "text-lg", "font-bold", "text-foreground");
    });

    it("refが適用", () => {
      const ref = React.createRef<HTMLHeadingElement>();
      render(<Section ref={ref}>Ref Test</Section>);
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(ref.current?.tagName).toBe("H2");
    });
  });

  describe("BlockTitle", () => {
    it("h3要素がデフォルトのclassで表示", () => {
      render(<Block data-testid="title-block">Hello Block</Block>);
      const titleEl = screen.getByTestId("title-block");

      expect(titleEl.tagName).toBe("H3");
      expect(titleEl).toHaveClass("text-md", "font-bold", "text-foreground");
      expect(titleEl).toHaveTextContent("Hello Block");
    });

    it("デフォルトと追加のclassが両方適用", () => {
      render(
        <Block data-testid="title-block" className="custom-block-class">
          With Custom Class
        </Block>
      );
      const titleEl = screen.getByTestId("title-block");
      expect(titleEl).toHaveClass("custom-block-class", "text-md", "font-bold", "text-foreground");
    });

    it("refが適用", () => {
      const ref = React.createRef<HTMLHeadingElement>();
      render(<Block ref={ref}>Ref Test</Block>);
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(ref.current?.tagName).toBe("H3");
    });
  });

});

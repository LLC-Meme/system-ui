import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Table from "./table";

const { Container, Head, Body, Foot, Row, HeadingCell, Cell } = Table;

describe("Table", () => {

  it("basicスタイルのtableのclassが正しい", () => {
    render(
      <Container tableStyle="basic" data-testid="table-basic">
        <Head>
          <Row>
            <HeadingCell>Column 1</HeadingCell>
            <HeadingCell>Column 2</HeadingCell>
          </Row>
        </Head>
        <Body>
          <Row muted>
            <Cell>Row 1, Cell 1</Cell>
            <Cell>Row 1, Cell 2</Cell>
          </Row>
          <Row>
            <Cell>Row 2, Cell 1</Cell>
            <Cell>Row 2, Cell 2</Cell>
          </Row>
        </Body>
      </Container>
    );

    // Containerにbasicスタイルのclassが適用されていることを確認
    const tableEl = screen.getByTestId("table-basic");
    expect(tableEl).toHaveClass("border", "border-border", "rounded-lg");

    // Heading cellのclassが正しいことを確認
    const headingCells = screen.getAllByRole("columnheader");
    headingCells.forEach((th) => {
      expect(th).toHaveClass("font-semibold", "p-4", "pr-24");
    });

    // Body cellのclassが正しいことを確認
    const cells = screen.getAllByRole("cell");
    cells.forEach((td) => {
      expect(td).toHaveClass("p-4", "border-t", "border-border");
    });

    // mutedの行に正しいclassが適用されていることを確認
    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveClass("bg-surface-muted2");
  });


  it("plainスタイルのtableのclassが正しい", () => {
    render(
      <Container tableStyle="plain" data-testid="table-plain">
        <Head>
          <Row>
            <HeadingCell>Col A</HeadingCell>
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell>Row A, Cell A</Cell>
          </Row>
        </Body>
        <Foot>
          <Row>
            <Cell>Footer content</Cell>
          </Row>
        </Foot>
      </Container>
    );

    // Containerにbasicスタイルのclassが適用されていないことを確認
    const tableEl = screen.getByTestId("table-plain");
    expect(tableEl).not.toHaveClass("border", "rounded-lg");

    // Heading cellのclassが正しいことを確認
    const headingCell = screen.getByRole("columnheader");
    expect(headingCell).toHaveClass(
      "font-semibold",
      "pl-2",
      "pr-12",
      "py-1",
      "border-y",
      "border-border"
    );

    // Body cellのclassが正しいことを確認
    const bodyCell = screen.getByRole("cell", { name: "Row A, Cell A" });
    expect(bodyCell).toHaveClass("px-2", "py-1");
  });


  it("tableが正しい構造で表示", () => {
    // 実際のユースケースを想定したサンプル
    render(
      <Container tableStyle="basic" data-testid="basic-table">
        <Head>
          <Row>
            <HeadingCell>Column 1</HeadingCell>
            <HeadingCell>Column 2</HeadingCell>
            <HeadingCell>Column 3</HeadingCell>
            <HeadingCell>Column 4</HeadingCell>
            <HeadingCell>Column 5</HeadingCell>
          </Row>
        </Head>
        <Body>
          <Row muted>
            <Cell>Row 1, Cell 1</Cell>
            <Cell>Row 1, Cell 2</Cell>
            <Cell>Row 1, Cell 3</Cell>
            <Cell>Row 1, Cell 4</Cell>
            <Cell>Row 1, Cell 5</Cell>
          </Row>
          <Row>
            <Cell>Row 2, Cell 1</Cell>
            <Cell>Row 2, Cell 2</Cell>
            <Cell>Row 2, Cell 3</Cell>
            <Cell>Row 2, Cell 4</Cell>
            <Cell>Row 2, Cell 5</Cell>
          </Row>
          <Row muted>
            <Cell>Row 3, Cell 1</Cell>
            <Cell>Row 3, Cell 2</Cell>
            <Cell>Row 3, Cell 3</Cell>
            <Cell>Row 3, Cell 4</Cell>
            <Cell>Row 3, Cell 5</Cell>
          </Row>
          <Row>
            <Cell>Row 4, Cell 1</Cell>
            <Cell>Row 4, Cell 2</Cell>
            <Cell>Row 4, Cell 3</Cell>
            <Cell>Row 4, Cell 4</Cell>
            <Cell>Row 4, Cell 5</Cell>
          </Row>
        </Body>
      </Container>
    );

    // 5行のテーブルが表示されていることを確認
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(5);

    // 5列のヘッダーが表示されていることを確認
    const headers = screen.getAllByRole("columnheader");
    expect(headers.length).toBe(5);

    // ランダムなセルの内容が表示されていることを確認
    expect(screen.getByText("Row 3, Cell 3")).toBeInTheDocument();
    expect(rows[3]).toHaveClass("bg-surface-muted2");
  });


  it("tableにrefが適用", () => {
    const ref = React.createRef<HTMLTableElement>();
    render(
      <Container ref={ref} data-testid="ref-table">
        <Body>
          <Row>
            <Cell>Cell 1</Cell>
          </Row>
        </Body>
      </Container>
    );

    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });


});
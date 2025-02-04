import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Table, Thead, Tbody, Tr, Th, Td, Tfoot } from "./table";

describe("Table", () => {
  it("basicスタイルのtableのclassが正しい", () => {
    render(
      <Table tableStyle="basic" data-testid="table-basic">
        <Thead>
          <Tr>
            <Th>Column 1</Th>
            <Th>Column 2</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr muted>
            <Td>Row 1, Cell 1</Td>
            <Td>Row 1, Cell 2</Td>
          </Tr>
          <Tr>
            <Td>Row 2, Cell 1</Td>
            <Td>Row 2, Cell 2</Td>
          </Tr>
        </Tbody>
      </Table>,
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
      <Table tableStyle="plain" data-testid="table-plain">
        <Thead>
          <Tr>
            <Th>Col A</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Row A, Cell A</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Td>Footer content</Td>
          </Tr>
        </Tfoot>
      </Table>,
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
      "border-border",
    );

    // Body cellのclassが正しいことを確認
    const bodyCell = screen.getByRole("cell", { name: "Row A, Cell A" });
    expect(bodyCell).toHaveClass("px-2", "py-1");
  });

  it("tableが正しい構造で表示", () => {
    // 実際のユースケースを想定したサンプル
    render(
      <Table tableStyle="basic" data-testid="basic-table">
        <Thead>
          <Tr>
            <Th>Column 1</Th>
            <Th>Column 2</Th>
            <Th>Column 3</Th>
            <Th>Column 4</Th>
            <Th>Column 5</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr muted>
            <Td>Row 1, Cell 1</Td>
            <Td>Row 1, Cell 2</Td>
            <Td>Row 1, Cell 3</Td>
            <Td>Row 1, Cell 4</Td>
            <Td>Row 1, Cell 5</Td>
          </Tr>
          <Tr>
            <Td>Row 2, Cell 1</Td>
            <Td>Row 2, Cell 2</Td>
            <Td>Row 2, Cell 3</Td>
            <Td>Row 2, Cell 4</Td>
            <Td>Row 2, Cell 5</Td>
          </Tr>
          <Tr muted>
            <Td>Row 3, Cell 1</Td>
            <Td>Row 3, Cell 2</Td>
            <Td>Row 3, Cell 3</Td>
            <Td>Row 3, Cell 4</Td>
            <Td>Row 3, Cell 5</Td>
          </Tr>
          <Tr>
            <Td>Row 4, Cell 1</Td>
            <Td>Row 4, Cell 2</Td>
            <Td>Row 4, Cell 3</Td>
            <Td>Row 4, Cell 4</Td>
            <Td>Row 4, Cell 5</Td>
          </Tr>
        </Tbody>
      </Table>,
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
      <Table ref={ref} data-testid="ref-table">
        <Tbody>
          <Tr>
            <Td>Cell 1</Td>
          </Tr>
        </Tbody>
      </Table>,
    );

    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });
});

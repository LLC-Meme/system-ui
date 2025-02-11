import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SheetRoot from "./root";
import SheetTrigger from "./trigger";
import SheetContent from "./content";
import SheetClose from "./close";

describe("Sheet", () => {
  // テスト用のsheetコンポーネントを作成
  function TestSheet() {
    return (
      <SheetRoot>
        <SheetTrigger aria-label="open-sheet">Open Sheet</SheetTrigger>
        <SheetContent>
          <p>Sheet Content</p>
          <SheetClose aria-label="close-sheet">X</SheetClose>
        </SheetContent>
      </SheetRoot>
    );
  }

  it("デフォルトではsheetが表示されない", () => {
    render(<TestSheet />);
    expect(screen.queryByText("Sheet Content")).not.toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("triggerのクリックでsheetとoverlayが表示", async () => {
    render(<TestSheet />);
    // sheetを開く
    fireEvent.click(screen.getByLabelText("open-sheet"));

    // sheetのコンテンツが表示される
    expect(await screen.findByText("Sheet Content")).toBeInTheDocument();
    // overlayが表示される
    const dialogEl = screen.getByRole("dialog");
    expect(dialogEl).toBeInTheDocument();
  });

  it("closeボタンのクリックでsheetが非表示になる", async () => {
    render(<TestSheet />);
    // sheetを開く
    fireEvent.click(screen.getByLabelText("open-sheet"));
    expect(await screen.findByText("Sheet Content")).toBeInTheDocument();

    // closeボタンをクリック
    fireEvent.click(screen.getByLabelText("close-sheet"));
    // sheetのコンテンツが非表示になる
    expect(screen.queryByText("Sheet Content")).not.toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

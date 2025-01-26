import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Sheet from "./sheet";

const { Root, Trigger, Content, Close } = Sheet;

describe("Sheet", () => {
  // テスト用のsheetコンポーネントを作成
  function TestSheet() {
    return (
      <Root>
        <Trigger aria-label="open-sheet">Open Sheet</Trigger>
        <Content>
          <p>Sheet Content</p>
          <Close aria-label="close-sheet">X</Close>
        </Content>
      </Root>
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

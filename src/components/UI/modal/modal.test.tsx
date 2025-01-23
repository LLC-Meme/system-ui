import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Modal from "./modal";


describe("Modal", () => {
  // テスト用のコンポーネントを作成
  function TestModal() {
    return (
      <Modal.Root>
        <Modal.Trigger aria-label="open-modal">Open Modal</Modal.Trigger>
        <Modal.Content>
          <p>Modal content here</p>
        </Modal.Content>
      </Modal.Root>
    );
  }

  it("デフォルトではモーダルが表示されない", () => {
    render(<TestModal />);
    // モーダルのコンテンツは表示されない
    expect(screen.queryByText("Modal content here")).not.toBeInTheDocument();
    // オーバーレイも表示されない
    expect(screen.queryByLabelText("modal-overlay")).not.toBeInTheDocument();
  });

  it("トリガーボタンをクリックするとモーダルが表示される", async () => {
    render(<TestModal />);
    // トリガーボタンをクリック
    fireEvent.click(screen.getByLabelText("open-modal"));

    // モーダルのコンテンツが表示される
    expect(await screen.findByText("Modal content here")).toBeInTheDocument();
    // オーバーレイも表示される
    expect(screen.getByLabelText("modal-overlay")).toBeInTheDocument();
  });


  it("モーダル内の閉じるボタンをクリックするとモーダルが閉じる", async () => {
    render(<TestModal />);
  
    // 1. トリガーボタンをクリックしてモーダルを開く
    fireEvent.click(screen.getByLabelText("open-modal"));
    // 2. "Modal content here" が表示されるまで待つ
    expect(await screen.findByText("Modal content here")).toBeInTheDocument();
    // 3. 閉じるボタンをクリック
    fireEvent.click(screen.getByLabelText("close-modal"));
    // 4. モーダルのコンテンツとオーバーレイが消える
    expect(screen.queryByText("Modal content here")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("modal-overlay")).not.toBeInTheDocument();
  });


  it("デフォルトでモーダル内にあるClose以外のCloseでモーダルを閉じる", async () => {
    // モーダル内に別のCloseボタンがある場合
    function TestModalWithAdditionalClose() {
      return (
        <Modal.Root>
          <Modal.Trigger aria-label="open-modal">Open Modal</Modal.Trigger>
          <Modal.Content>
            <p>Modal content here</p>
            <Modal.Close aria-label="additional-close-modal">X</Modal.Close>
          </Modal.Content>
        </Modal.Root>
      );
    }

    render(<TestModalWithAdditionalClose />);

    // 1. トリガーボタンをクリックしてモーダルを開く
    fireEvent.click(screen.getByLabelText("open-modal"));
    // 2. "Modal content here" が表示されるまで待つ
    expect(await screen.findByText("Modal content here")).toBeInTheDocument();

    // 3. 閉じるボタン(別のClose)をクリック
    fireEvent.click(screen.getByLabelText("additional-close-modal"));

    // 4. モーダルのコンテンツとオーバーレイが消える
    expect(screen.queryByText("Modal content here")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("modal-overlay")).not.toBeInTheDocument();
  });


  it("モーダルを開いたときにbodyがスクロール不可になる", async () => {
    render(<TestModal />);
  
    // デフォルトではbodyはスクロール可能
    expect(document.body).not.toHaveStyle({ overflow: "hidden" });
  
    // トリガーボタンをクリックしてモーダルを開く
    fireEvent.click(screen.getByLabelText("open-modal"));
    await screen.findByText("Modal content here");
  
    // モーダルが開かれたときにbodyがスクロール不可になる
    expect(document.body).toHaveStyle({ overflow: "hidden" });
  });


  it("モーダルが開いた時にフォーカストラップが有効になる", async () => {
    render(<TestModal />);

    // モーダルの背景にフォーカス可能な要素を追加
    const backgroundButton = document.createElement("button");
    backgroundButton.innerText = "Background Button";
    document.body.appendChild(backgroundButton);

    // トリガーボタンをクリックしてモーダルを開く
    fireEvent.click(screen.getByLabelText("open-modal"));
    await screen.findByText("Modal content here");

    // タブキーを複数回押してフォーカスを移動
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    // モーダル内の要素にフォーカスが移動
    expect(document.activeElement).not.toBe(backgroundButton);

    // クリーンアップ
    document.body.removeChild(backgroundButton);
  });


});
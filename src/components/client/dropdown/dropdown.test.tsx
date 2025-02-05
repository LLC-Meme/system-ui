import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import DropdownRoot from "./root";
import DropdownTrigger from "./trigger";
import DropdownContent from "./content";
import DropdownItem from "./item";
import DropdownDivider from "./divider";

describe("Dropdown", () => {
  function TestDropdown() {
    return (
      <DropdownRoot>
        <DropdownTrigger aria-label="open-dropdown">
          メニューを開く
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>アイテム 1</DropdownItem>
          <DropdownDivider />
          <DropdownItem>アイテム 2</DropdownItem>
          <DropdownDivider />
          <DropdownItem variant="danger" aria-label="delete">
            削除
          </DropdownItem>
        </DropdownContent>
      </DropdownRoot>
    );
  }

  it("デフォルトではContentが表示されない", () => {
    render(<TestDropdown />);
    const item1 = screen.queryByText("アイテム 1");
    expect(item1).not.toBeInTheDocument();
  });

  it("TriggerをクリックするとContentが表示される", async () => {
    render(<TestDropdown />);
    const trigger = screen.getByLabelText("open-dropdown");
    await userEvent.click(trigger);
    const item1 = screen.getByText("アイテム 1");
    expect(item1).toBeInTheDocument();
  });

  it("Content内にすべてのItemが表示される", async () => {
    render(<TestDropdown />);
    const trigger = screen.getByLabelText("open-dropdown");
    await userEvent.click(trigger);

    const item1 = screen.getByText("アイテム 1");
    const item2 = screen.getByText("アイテム 2");
    const deleteItem = screen.getByText("削除");

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(deleteItem).toBeInTheDocument();
  });

  it("variantプロパティが適用されたItemが正しくスタイルされている", async () => {
    render(<TestDropdown />);
    const trigger = screen.getByLabelText("open-dropdown");
    await userEvent.click(trigger);

    const deleteItem = screen.getByLabelText("delete");
    expect(deleteItem).toHaveClass("text-alert");
  });
});

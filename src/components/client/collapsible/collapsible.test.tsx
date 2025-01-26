import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Collapsible from "./collapsible";

describe("Collapsible", () => {
  function TestCollapsible() {
    return (
      <Collapsible.Root>
        <Collapsible.Trigger aria-label="open-collapsible">
          Toggle
        </Collapsible.Trigger>
        <Collapsible.Content>
          <p>Collapsible Content</p>
          <Collapsible.Item>Item 1</Collapsible.Item>
          <Collapsible.Item>Item 2</Collapsible.Item>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  }

  it("デフォルトではContentが表示されない", () => {
    render(<TestCollapsible />);

    const content = screen.queryByText("Collapsible Content");
    expect(content).not.toBeInTheDocument();
  });

  it("TriggerをクリックするとContentが表示", async () => {
    render(<TestCollapsible />);
    const trigger = screen.getByLabelText("open-collapsible");
    fireEvent.click(trigger);

    const content = screen.getByText("Collapsible Content");
    expect(content).toBeInTheDocument();
  });

  it("Content内にItemが表示", async () => {
    render(<TestCollapsible />);
    const trigger = screen.getByLabelText("open-collapsible");
    fireEvent.click(trigger);

    // Triggerクリック後にItemが表示される
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });
});

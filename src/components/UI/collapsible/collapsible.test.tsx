import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CollapsibleRoot from "./root";
import CollapsibleTrigger from "./trigger";
import CollapsibleContent from "./content";
import CollapsibleItem from "./item";

describe("Collapsible", () => {
  function TestCollapsible() {
    return (
      <CollapsibleRoot>
        <CollapsibleTrigger aria-label="open-collapsible">
          Toggle
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p>Collapsible Content</p>
          <CollapsibleItem>Item 1</CollapsibleItem>
          <CollapsibleItem>Item 2</CollapsibleItem>
        </CollapsibleContent>
      </CollapsibleRoot>
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

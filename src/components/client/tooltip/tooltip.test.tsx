import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Tooltip from "./tooltip";

const { Root, Trigger, Content } = Tooltip;

describe("Tooltip", () => {
  function TestTooltip() {
    return (
      <Root>
        <Trigger data-testid="tooltip-trigger">Hover me</Trigger>
        <Content data-testid="tooltip-content">Tooltip text</Content>
      </Root>
    );
  }

  it("デフォルトでは表示されない", () => {
    render(<TestTooltip />);
    expect(screen.queryByTestId("tooltip-content")).not.toBeInTheDocument();
  });

  it("ホバーでtooltipが表示される", async () => {
    render(<TestTooltip />);
    await userEvent.hover(screen.getByTestId("tooltip-trigger"));
    expect(await screen.findByTestId("tooltip-content")).toBeInTheDocument();
  });
});

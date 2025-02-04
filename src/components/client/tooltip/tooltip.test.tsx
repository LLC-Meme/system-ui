import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { TooltipRoot, TooltipTrigger, TooltipContent } from "./tooltip";

describe("Tooltip", () => {
  function TestTooltip() {
    return (
      <TooltipRoot>
        <TooltipTrigger data-testid="tooltip-trigger">Hover me</TooltipTrigger>
        <TooltipContent data-testid="tooltip-content">
          Tooltip text
        </TooltipContent>
      </TooltipRoot>
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

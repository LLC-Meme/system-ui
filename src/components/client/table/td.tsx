"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";
import { TableStyleContext } from "./type";

function Td({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>> & {
  className?: string;
}) {
  const tableStyle = React.useContext(TableStyleContext);
  return (
    <td
      {...props}
      className={cn(
        className,
        tableStyle === "basic" && "p-4 border-t border-border",
        tableStyle === "plain" && "px-2 py-1",
      )}
    >
      {children}
    </td>
  );
}
Td.displayName = "Td";

export default Td;

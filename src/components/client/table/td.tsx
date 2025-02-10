"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";
import { TableStyleContext } from "./type";

/**
 * `<td>`要素に該当するコンポーネント
 */
const Td = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>> & {
  className?: string;
}) => {
  const tableStyle = React.useContext(TableStyleContext);
  return (
    <td {...props}>
      <div
        className={cn(
          className,
          tableStyle === "basic" && "p-4",
          tableStyle === "minimal" && "py-1",
        )}
      >
        {children}
      </div>
    </td>
  );
};
Td.displayName = "Td";

export default Td;

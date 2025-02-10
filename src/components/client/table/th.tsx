"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";
import { TableStyleContext } from "./type";

/**
 * `<th>`要素に該当するコンポーネント
 */
const Th = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableHeaderCellElement>
> & {
  className?: string;
}) => {
  const tableStyle = React.useContext(TableStyleContext);
  return (
    <th
      {...props}
      className={cn(
        className,
        "text-left",
        tableStyle === "basic" && "font-semibold p-4 pr-24",
        tableStyle === "plain" &&
          "font-semibold py-1 border-y border-border border-spacing-0",
      )}
    >
      <div>{children}</div>
    </th>
  );
};
Th.displayName = "Th";

export default Th;

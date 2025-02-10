"use client";

import * as React from "react";
import styles from "./table.module.css";
import { cn } from "../../../lib/cn";
import { TableStyleContext } from "./type";

/**
 * `<tr>`要素に該当するコンポーネント
 */
const Tr = ({
  children,
  muted = false,
  className,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableRowElement>> & {
  className?: string;
  muted?: boolean;
}) => {
  const tableStyle = React.useContext(TableStyleContext);
  return (
    <tr
      {...props}
      className={cn(
        className,
        tableStyle === "minimal" && styles.minimalRow,
        muted && styles.mutedRow,
      )}
    >
      {children}
    </tr>
  );
};
Tr.displayName = "Tr";

export default Tr;

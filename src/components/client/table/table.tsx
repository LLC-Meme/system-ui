"use client";

import * as React from "react";
import styles from "./table.module.css";
import { cn } from "../../../lib/cn";
import { TableStyleContext, type TableStyle } from "./type";

export interface TableProps extends React.ComponentPropsWithoutRef<"table"> {
  tableStyle?: TableStyle;
  children: React.ReactNode;
}

/**
 * `<table>`要素に該当するコンポーネント
 * `tableStyle`を指定することで子の各テーブル要素にスタイルが反映される
 * @param {TableStyle} tableStyle テーブルのスタイル
 */
const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ tableStyle = "basic", children, ...props }, ref) => {
    return (
      <TableStyleContext.Provider value={tableStyle}>
        <table
          ref={ref}
          {...props}
          className={cn(
            styles.table,
            props.className,
            "border-separate border-spacing-0",
            tableStyle === "basic" &&
              "border border-border rounded-lg overflow-hidden",
            tableStyle === "plain" && "",
          )}
        >
          {children}
        </table>
      </TableStyleContext.Provider>
    );
  },
);
Table.displayName = "Table";

export default Table;

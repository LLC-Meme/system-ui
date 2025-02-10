import * as React from "react";
import styles from "./table.module.css";
import { cn } from "../../../lib/cn";

type TableStyle = "basic" | "minimal" | "plain";

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
      <table
        ref={ref}
        {...props}
        border={0}
        cellSpacing={0}
        cellPadding={0}
        className={cn(
          styles.table,
          tableStyle === "basic" && styles.basicTable,
          tableStyle === "minimal" && styles.minimalTable,
          tableStyle === "plain" && styles.plainTable,
          props.className,
        )}
      >
        {children}
      </table>
    );
  },
);
Table.displayName = "Table";

export default Table;

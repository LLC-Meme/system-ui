"use client";

import * as React from "react";
import styles from "./table.module.css";
import { cn } from "../../../lib/cn";

type TableStyle = "basic" | "plain";

const TableStyleContext = React.createContext<TableStyle>("basic");

export interface TableProps extends React.ComponentPropsWithoutRef<"table"> {
  tableStyle?: TableStyle;
  children: React.ReactNode;
}

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

function Thead({
  children,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableSectionElement>
>) {
  return <thead {...props}>{children}</thead>;
}
Thead.displayName = "Thead";

function Tbody({
  children,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableSectionElement>
>) {
  return <tbody {...props}>{children}</tbody>;
}
Tbody.displayName = "Tbody";

function Tfoot({
  children,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableSectionElement>
>) {
  return <tfoot {...props}>{children}</tfoot>;
}
Tfoot.displayName = "Tfoot";

function Tr({
  children,
  muted = false,
  className,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableRowElement>> & {
  className?: string;
  muted?: boolean;
}) {
  const tableStyle = React.useContext(TableStyleContext);
  return (
    <tr
      {...props}
      className={cn(
        className,
        tableStyle === "plain" && styles.row,
        muted && "bg-surface-muted2",
      )}
    >
      {children}
    </tr>
  );
}
Tr.displayName = "Tr";

function Th({
  children,
  className,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableHeaderCellElement>
> & {
  className?: string;
}) {
  const tableStyle = React.useContext(TableStyleContext);
  return (
    <th
      {...props}
      className={cn(
        className,
        tableStyle === "basic" && "font-semibold p-4 pr-24",
        tableStyle === "plain" &&
          "font-semibold pl-2 pr-12 py-1 border-y border-border",
      )}
    >
      {children}
    </th>
  );
}
Th.displayName = "Th";

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

export { Table, Thead, Tbody, Tfoot, Tr, Th, Td };

import React from "react";
import styles from "./table.module.css";
import { useContext, createContext } from "react";
import { cn } from "../../utils/cn";

type TableStyle = "basic" | "plain";

const TableStyleContext = createContext<TableStyle>("basic");


export interface TableProps extends React.ComponentPropsWithoutRef<"table"> {
  tableStyle?: TableStyle;
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLTableElement, TableProps>(({
  tableStyle = "basic",
  children,
  ...props
}, ref) => {
  return (
    <TableStyleContext.Provider value={tableStyle}>
      <table
        ref={ref}
        {...props}
        className={cn(
          styles.table,
          props.className,
          "border-separate border-spacing-0",
          tableStyle === "basic" && "border border-border rounded-lg overflow-hidden",
          tableStyle === "plain" && "",
        )}
      >
        {children}
      </table>
    </TableStyleContext.Provider>
  );
});
Container.displayName = "Table.Container";


function Head({
  children,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableSectionElement>>) {
  return (
    <thead {...props}>
      {children}
    </thead>
  );
}
Head.displayName = "Table.Head";


function Body({
  children,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableSectionElement>>) {
  return (
    <tbody {...props}>
      {children}
    </tbody>
  );
}
Body.displayName = "Table.Body";


function Foot({
  children,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableSectionElement>>) {
  return (
    <tfoot {...props}>
      {children}
    </tfoot>
  );
}
Foot.displayName = "Table.Foot";


function Row({
  children,
  muted = false,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableRowElement>> & {
  muted?: boolean;
}) {
  const tableStyle = useContext(TableStyleContext);
  return (
    <tr
      {...props}
      className={cn(
        props.className,
        tableStyle === "plain" && styles.row,
        muted && "bg-surface-muted2",
      )}
    >
      {children}
    </tr>
  );
}
Row.displayName = "Table.Row";


function HeadingCell({
  children,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableHeaderCellElement>>) {
  const tableStyle = useContext(TableStyleContext);
  return (
    <th
      {...props}
      className={cn(
        props.className,
        tableStyle === "basic" && "font-semibold p-4 pr-24",
        tableStyle === "plain" && "font-semibold pl-2 pr-12 py-1 border-y border-border",
      )}
    >
      {children}
    </th>
  );
}
HeadingCell.displayName = "Table.HeadingCell";


function Cell({
  children,
  ...props
}: React.PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) {
  const tableStyle = useContext(TableStyleContext);
  return (
    <td
      {...props}
      className={cn(
        props.className,
        tableStyle === "basic" && "p-4 border-t border-border",
        tableStyle === "plain" && "px-2 py-1",
      )}
    >
      {children}
    </td>
  );
}
Cell.displayName = "Table.Cell";


const Table = {
  Container,
  Head,
  Body,
  Foot,
  Row,
  HeadingCell,
  Cell,
};

export default Table;
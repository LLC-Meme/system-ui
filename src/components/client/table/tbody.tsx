"use client";

import * as React from "react";
import styles from "./table.module.css";
import { cn } from "../../../lib/cn";
import { TableStyleContext } from "./type";

/**
 * `<tbody>`要素に該当するコンポーネント
 */
const Tbody = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableSectionElement> & {
    className?: string;
  }
>) => {
  const tableStyle = React.useContext(TableStyleContext);
  return (
    <tbody
      {...props}
      className={cn(
        className,
        tableStyle === "minimal" && styles.minimalTbody,
        tableStyle === "plain" && styles.plainTbody,
      )}
    >
      {children}
    </tbody>
  );
};
Tbody.displayName = "Tbody";

export default Tbody;

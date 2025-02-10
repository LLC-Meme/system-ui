import * as React from "react";

/**
 * `<tr>`要素に該当するコンポーネント
 */
const Tr = ({
  children,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableRowElement>>) => {
  return <tr {...props}>{children}</tr>;
};
Tr.displayName = "Tr";

export default Tr;

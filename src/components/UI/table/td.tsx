import * as React from "react";

/**
 * `<td>`要素に該当するコンポーネント
 */
const Td = ({
  children,
  ...props
}: React.PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => {
  return (
    <td {...props}>
      <div>{children}</div>
    </td>
  );
};
Td.displayName = "Td";

export default Td;

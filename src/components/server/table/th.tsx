import * as React from "react";

/**
 * `<th>`要素に該当するコンポーネント
 */
const Th = ({
  children,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableCellElement>
>) => {
  return (
    <th {...props}>
      <div>{children}</div>
    </th>
  );
};
Th.displayName = "Th";

export default Th;

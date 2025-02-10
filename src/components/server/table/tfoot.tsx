import * as React from "react";

/**
 * `<tfoot>`要素に該当するコンポーネント
 */
const Tfoot = ({
  children,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableSectionElement>
>) => {
  return <tfoot {...props}>{children}</tfoot>;
};
Tfoot.displayName = "Tfoot";

export default Tfoot;

import * as React from "react";

function Tfoot({
  children,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableSectionElement>
>) {
  return <tfoot {...props}>{children}</tfoot>;
}
Tfoot.displayName = "Tfoot";

export default Tfoot;

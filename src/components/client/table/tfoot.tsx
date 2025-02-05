import * as React from "react";

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

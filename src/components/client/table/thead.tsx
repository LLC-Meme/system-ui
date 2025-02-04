import * as React from "react";

function Thead({
  children,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableSectionElement>
>) {
  return <thead {...props}>{children}</thead>;
}
Thead.displayName = "Thead";

export default Thead;

import * as React from "react";

/**
 * `<tbody>`要素に該当するコンポーネント
 */
const Tbody = ({
  children,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableSectionElement>
>) => {
  return <tbody {...props}>{children}</tbody>;
};
Tbody.displayName = "Tbody";

export default Tbody;

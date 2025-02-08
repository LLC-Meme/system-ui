import * as React from "react";

/**
 * `<thead>`要素に該当するコンポーネント
 */
const Thead = ({
  children,
  ...props
}: React.PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableSectionElement>
>) => {
  return <thead {...props}>{children}</thead>;
};
Thead.displayName = "Thead";

export default Thead;

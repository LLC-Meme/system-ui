import * as React from "react";

export interface BreadcrumbContainerProps {
  children: React.ReactNode;
}

const BreadcrumbContainer = React.forwardRef<
  HTMLOListElement,
  BreadcrumbContainerProps
>(({ children }, ref) => {
  return (
    <ol ref={ref} className="flex gap-2">
      {children}
    </ol>
  );
});
BreadcrumbContainer.displayName = "BreadcrumbContainer";

export default BreadcrumbContainer;

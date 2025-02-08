import * as React from "react";

export interface BreadcrumbContainerProps {
  children: React.ReactNode;
}

/**
 * Breadcrumbの全てのコンポーネントをラッピングするコンポーネント
 */
const BreadcrumbContainer = React.forwardRef<
  HTMLOListElement,
  BreadcrumbContainerProps
>(({ children }, ref) => {
  return (
    <ol ref={ref} className="flex items-center gap-2 mb-2">
      {children}
    </ol>
  );
});
BreadcrumbContainer.displayName = "BreadcrumbContainer";

export default BreadcrumbContainer;

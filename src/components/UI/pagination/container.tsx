import * as React from "react";

export interface PaginationContainerProps
  extends React.ComponentPropsWithoutRef<"nav"> {
  children: React.ReactNode;
}

/**
 * ページネーションのコンテナコンポーネント
 */
const PaginationContainer = React.forwardRef<
  HTMLElement,
  PaginationContainerProps
>(({ children }, ref) => {
  return (
    <nav ref={ref} className="flex items-center gap-1">
      {children}
    </nav>
  );
});
PaginationContainer.displayName = "Pagination.Container";

export default PaginationContainer;

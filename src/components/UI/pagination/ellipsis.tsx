import * as React from "react";

/**
 * ページネーションの省略記号コンポーネント
 */
const PaginationEllipsis = () => {
  return (
    <div className="w-8 h-8 center" aria-label="pagination-ellipsis">
      <svg
        className="w-6 h-6 text-info"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    </div>
  );
};
PaginationEllipsis.displayName = "Pagination.Ellipsis";

export default PaginationEllipsis;

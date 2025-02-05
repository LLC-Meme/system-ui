import * as React from "react";
import { Ellipsis as LucideEllipsis } from "lucide-react";

const PaginationEllipsis = () => {
  return (
    <div className="w-8 h-8 center" aria-label="pagination-ellipsis">
      <LucideEllipsis className="w-6 h-6 text-info" />
    </div>
  );
};
PaginationEllipsis.displayName = "Pagination.Ellipsis";

export default PaginationEllipsis;

import * as React from "react";
import { cn } from "../../../lib/cn";
import { ChevronRight } from "lucide-react";
import { type PaginationButtonProps } from "./type";

const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  PaginationButtonProps
>(({ as: Tag = "a", disabled, ...props }, ref) => {
  return (
    <Tag
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "center w-8 h-8 rounded-[4px] text-info",
        disabled && "opacity-[var(--disabled-opacity)] cursor-auto",
        !disabled && "hover:bg-info-muted hover:cursor-pointer",
      )}
      aria-label="pagination-next"
    >
      <ChevronRight className="w-6 h-6 text-info" />
    </Tag>
  );
});
PaginationNext.displayName = "Pagination.Next";

export default PaginationNext;

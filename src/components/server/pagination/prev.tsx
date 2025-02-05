import * as React from "react";
import { cn } from "../../../lib/cn";
import { ChevronLeft } from "lucide-react";
import { type PaginationButtonProps } from "./type";

const PaginationPrev = React.forwardRef<
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
        "center w-8 h-8 rounded-[4px] text-info",
        disabled && "opacity-[var(--disabled-opacity)] cursor-auto",
        !disabled && "hover:bg-info-muted hover:cursor-pointer",
      )}
      aria-label="pagination-prev"
    >
      <ChevronLeft className="w-6 h-6 text-info" />
    </Tag>
  );
});
PaginationPrev.displayName = "Pagination.Prev";

export default PaginationPrev;

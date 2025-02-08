import * as React from "react";
import { cn } from "../../../lib/cn";
import { type PaginationButtonProps } from "./type";

/**
 * ページネーションの前ページへ遷移するためのボタン
 * @param {React.ElementType} as ボタンの要素 デフォルトは"a" 適宜リンクの要素を指定できる
 * @param {boolean} disabled ボタンが無効かどうか
 */
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
        <path d="m15 18-6-6 6-6" />
      </svg>
    </Tag>
  );
});
PaginationPrev.displayName = "Pagination.Prev";

export default PaginationPrev;

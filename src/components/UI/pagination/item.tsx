import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";

export interface PaginationItemProps
  extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  current?: boolean;
  asChild?: boolean;
}

/**
 * ページネーションの各ページを表すアイテム
 * リンクとして用いる
 * @param {boolean} current 現在のページかどうか
 * @param {boolean} asChild 子要素として用いるか, trueの場合に子として別個のリンクコンポーネントを用いる
 */
const PaginationItem = React.forwardRef<HTMLAnchorElement, PaginationItemProps>(
  ({ children, current, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(
          "center w-8 h-8 rounded-[4px] text-info",
          "hover:cursor-pointer",
          current && "bg-info text-on-status hover",
          !current && "hover:bg-info-muted",
        )}
      >
        {children}
      </Comp>
    );
  },
);
PaginationItem.displayName = "Pagination.Item";

export default PaginationItem;

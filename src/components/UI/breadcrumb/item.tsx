import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";

export interface BreadcrumbItemProps
  extends React.ComponentPropsWithoutRef<"a"> {
  current?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

/**
 * Breadcrumbのアイテム
 * リンクとして用いる
 * @param {boolean} current 現在のページかどうか
 * @param {boolean} asChild 子要素として用いるか, trueの場合に子として別個のリンクコンポーネントを用いる
 */
const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ current, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <li ref={ref} className="list-none center">
        <Comp
          {...props}
          className={cn(
            "text-info text-sm",
            !current && "hover:underline",
            current && "font-semibold",
            "hover:cursor-pointer",
          )}
        >
          {children}
        </Comp>
      </li>
    );
  },
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export default BreadcrumbItem;

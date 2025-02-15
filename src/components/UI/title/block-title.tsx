import * as React from "react";
import { cn } from "../../../lib/cn";

export interface BlockTitleProps extends React.ComponentPropsWithoutRef<"h3"> {
  children: React.ReactNode;
}

/**
 * ブロックのタイトルを表すコンポーネント
 * `<h3>`要素に該当する
 */
const BlockTitle = React.forwardRef<HTMLHeadingElement, BlockTitleProps>(
  ({ children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        {...props}
        className={cn(props.className, "text-lg font-bold")}
      >
        {children}
      </h3>
    );
  },
);
BlockTitle.displayName = "BlockTitle";

export default BlockTitle;

import * as React from "react";
import { cn } from "../../../lib/cn";

export interface PageTitleProps extends React.ComponentPropsWithoutRef<"h1"> {
  children: React.ReactNode;
}

/**
 * ページのタイトルを表すコンポーネント
 * `<h1>`要素に該当する
 */
const PageTitle = React.forwardRef<HTMLHeadingElement, PageTitleProps>(
  ({ children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(props.className, "text-2xl font-bold")}
      >
        {children}
      </h1>
    );
  },
);
PageTitle.displayName = "PageTitle";

export default PageTitle;

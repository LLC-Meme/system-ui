import * as React from "react";
import { cn } from "../../../lib/cn";

export interface PageTitleProps extends React.ComponentPropsWithoutRef<"h1"> {
  children: React.ReactNode;
}

const PageTitle = React.forwardRef<HTMLHeadingElement, PageTitleProps>(
  ({ children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(props.className, "text-xl font-bold text-foreground")}
      >
        {children}
      </h1>
    );
  },
);
PageTitle.displayName = "PageTitle";

export default PageTitle;

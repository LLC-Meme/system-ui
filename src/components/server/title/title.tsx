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

export interface SectionTitleProps
  extends React.ComponentPropsWithoutRef<"h2"> {
  children: React.ReactNode;
}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className={cn(props.className, "text-lg font-bold text-foreground")}
      >
        {children}
      </h2>
    );
  },
);
SectionTitle.displayName = "SectionTitle";

export interface BlockTitleProps extends React.ComponentPropsWithoutRef<"h3"> {
  children: React.ReactNode;
}

const BlockTitle = React.forwardRef<HTMLHeadingElement, BlockTitleProps>(
  ({ children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        {...props}
        className={cn(props.className, "text-md font-bold text-foreground")}
      >
        {children}
      </h3>
    );
  },
);
BlockTitle.displayName = "BlockTitle";

export { PageTitle, SectionTitle, BlockTitle };

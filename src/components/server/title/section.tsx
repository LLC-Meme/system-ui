import * as React from "react";
import { cn } from "../../../lib/cn";

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
        className={cn(props.className, "text-xl font-bold text-foreground")}
      >
        {children}
      </h2>
    );
  },
);
SectionTitle.displayName = "SectionTitle";

export default SectionTitle;

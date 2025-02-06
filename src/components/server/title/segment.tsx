import * as React from "react";
import { cn } from "../../../lib/cn";

export interface SegmentTitleProps
  extends React.ComponentPropsWithoutRef<"h4"> {
  children: React.ReactNode;
}

const SegmentTitle = React.forwardRef<HTMLHeadingElement, SegmentTitleProps>(
  ({ children, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        {...props}
        className={cn(props.className, "text-md font-bold")}
      >
        {children}
      </h4>
    );
  },
);
SegmentTitle.displayName = "SegmentTitle";

export default SegmentTitle;

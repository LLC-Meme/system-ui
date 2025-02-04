import * as React from "react";
import { cn } from "../../../lib/cn";

type Gap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
const gapMap = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};

export interface StackProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  gap?: Gap;
}

const VStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, gap = "none", ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(props.className, "flex flex-col", `gap-${gapMap[gap]}`)}
      >
        {children}
      </div>
    );
  },
);
VStack.displayName = "VStack";

const HStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, gap = "none", ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(props.className, "flex", `gap-${gapMap[gap]}`)}
      >
        {children}
      </div>
    );
  },
);
HStack.displayName = "HStack";

export { VStack, HStack };

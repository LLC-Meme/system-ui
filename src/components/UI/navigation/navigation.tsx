import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";

export interface NavigationProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  asChild?: boolean;
}

const Navigation = React.forwardRef<HTMLAnchorElement, NavigationProps>(
  ({ children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "text-info hover:underline hover:cursor-pointer",
        )}
      >
        {children}
      </Comp>
    );
  },
);
Navigation.displayName = "Navigation";

export default Navigation;

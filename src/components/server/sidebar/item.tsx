import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";

export interface SidebarItemProps extends React.ComponentPropsWithoutRef<"a"> {
  current?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

const SidebarItem = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ current, asChild, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "py-2 px-4 flex gap-2 rounded-[4px] hover:cursor-pointer",
          !current && "hover:bg-surface-muted2",
          current && "bg-surface-muted1 font-medium",
        )}
      >
        {children}
      </Comp>
    );
  },
);
SidebarItem.displayName = "SidebarItem";

export default SidebarItem;

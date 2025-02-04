"use client";

import * as React from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { cn } from "../../../lib/cn";

const DropdownItem = React.forwardRef<
  React.ComponentRef<typeof RadixDropdown.Item>,
  React.ComponentPropsWithoutRef<typeof RadixDropdown.Item> & {
    inset?: boolean;
    variant?: "default" | "danger" | "info";
  }
>(({ className, inset, variant = "info", ...props }, ref) => {
  return (
    <RadixDropdown.Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 px-4 py-2 outline-none transition-colors focus:bg-surface-muted2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        variant === "info" && "text-info",
        variant === "danger" && "text-alert",
        className,
      )}
      {...props}
    />
  );
});
DropdownItem.displayName = "DropdownItem";

export default DropdownItem;

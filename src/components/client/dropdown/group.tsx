"use client";

import * as React from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { cn } from "../../../lib/cn";

const DropdownGroup = React.forwardRef<
  React.ComponentRef<typeof RadixDropdown.Group>,
  React.ComponentPropsWithoutRef<typeof RadixDropdown.Group>
>(({ className, children, ...props }, ref) => {
  return (
    <RadixDropdown.Group ref={ref} className={cn(className)} {...props}>
      {children}
    </RadixDropdown.Group>
  );
});
DropdownGroup.displayName = "DropdownGroup";

export default DropdownGroup;

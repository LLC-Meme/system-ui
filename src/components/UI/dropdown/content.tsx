"use client";

import * as React from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { cn } from "../../../lib/cn";

/**
 * ドロップダウンのコンテンツ部分
 * @param {number} sideOffset 左側の余白
 */
const DropdownContent = React.forwardRef<
  React.ComponentRef<typeof RadixDropdown.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDropdown.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <RadixDropdown.Group>
      <RadixDropdown.Portal>
        <RadixDropdown.Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn(
            "z-30 min-w-[8rem] overflow-hidden rounded-lg bg-surface shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
          )}
          {...props}
        />
      </RadixDropdown.Portal>
    </RadixDropdown.Group>
  );
});
DropdownContent.displayName = "DropdownContent";

export default DropdownContent;

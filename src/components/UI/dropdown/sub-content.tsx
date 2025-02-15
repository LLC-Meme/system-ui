"use client";

import * as React from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { cn } from "../../../lib/cn";

/**
 * ドロップダウンのサブコンテンツ部分
 * ドロップダウンからさらにドロップダウンを表示する際に用いる
 */
const DropdownSubContent = React.forwardRef<
  React.ComponentRef<typeof RadixDropdown.SubContent>,
  React.ComponentPropsWithoutRef<typeof RadixDropdown.SubContent>
>(({ className, children, ...props }, ref) => {
  return (
    <RadixDropdown.Portal>
      <RadixDropdown.SubContent
        ref={ref}
        className={cn(
          "z-40 min-w-[8rem] overflow-hidden rounded-lg bg-surface shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      >
        {children}
      </RadixDropdown.SubContent>
    </RadixDropdown.Portal>
  );
});
DropdownSubContent.displayName = "DropdownSubContent";

export default DropdownSubContent;

"use client";

import * as React from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { cn } from "../../../lib/cn";
import { CollapsibleContext } from "./root";

export interface CollapsibleTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  current?: boolean;
}

/**
 * Collapsibleのトリガー部分のアイテム
 * これをクリックすることで折りたたみ部分が表示される
 * @param {boolean} current 現在のページかどうか
 */
const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  CollapsibleTriggerProps
>(({ children, current, ...props }, ref) => {
  const { isOpen } = React.useContext(CollapsibleContext);
  return (
    <RadixCollapsible.Trigger
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "w-full py-2 px-4 flex items-center justify-between rounded-[4px] cursor-pointer",
        current && "bg-surface-muted1 font-medium",
        !current && "hover:bg-surface-muted2",
      )}
    >
      <div className="flex gap-2">{children}</div>
      <svg
        className={cn(
          "w-5 h-5 text-info",
          "transition-transform",
          isOpen && "transform rotate-90",
        )}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </RadixCollapsible.Trigger>
  );
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";

export default CollapsibleTrigger;

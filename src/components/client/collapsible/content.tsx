"use client";

import * as React from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";

export interface CollapsibleContentProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  CollapsibleContentProps
>(({ children, ...props }, ref) => {
  return (
    <RadixCollapsible.Content ref={ref} {...props}>
      {children}
    </RadixCollapsible.Content>
  );
});
CollapsibleContent.displayName = "CollapsibleContent";

export default CollapsibleContent;

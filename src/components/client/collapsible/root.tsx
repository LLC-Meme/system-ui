"use client";

import * as React from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";

export const CollapsibleContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export interface CollapsibleRootProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

/**
 * Collapsibleのルートコンポーネント、collapsibleの全てをこれでラップする
 * ビューに影響は与えない
 */
const CollapsibleRoot = React.forwardRef<HTMLDivElement, CollapsibleRootProps>(
  ({ children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <CollapsibleContext.Provider value={{ isOpen, setIsOpen }}>
        <RadixCollapsible.Root
          open={isOpen}
          onOpenChange={setIsOpen}
          ref={ref}
          {...props}
        >
          {children}
        </RadixCollapsible.Root>
      </CollapsibleContext.Provider>
    );
  },
);
CollapsibleRoot.displayName = "CollapsibleRoot";

export default CollapsibleRoot;

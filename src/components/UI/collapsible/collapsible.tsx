"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { cn } from "../../../lib/cn";
import { ChevronRight } from "lucide-react";

const CollapsibleContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export interface CollapsibleContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, CollapsibleContainerProps>(
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
Container.displayName = "Collapsible.Container";

export interface CollapsibleTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

const Trigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ children, ...props }, ref) => {
    const { isOpen } = React.useContext(CollapsibleContext);
    return (
      <RadixCollapsible.Trigger
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "w-full py-2 px-4 flex items-center justify-between rounded-[4px] cursor-pointer hover:bg-surface-muted2",
        )}
      >
        <div className="flex gap-2">{children}</div>
        <ChevronRight
          strokeWidth={3}
          className={cn(
            "w-5 h-5 text-info",
            "transition-transform",
            isOpen && "transform rotate-90",
          )}
        />
      </RadixCollapsible.Trigger>
    );
  },
);
Trigger.displayName = "Collapsible.Trigger";

export interface CollapsibleContentProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Content = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <RadixCollapsible.Content ref={ref} {...props}>
        {children}
      </RadixCollapsible.Content>
    );
  },
);
Content.displayName = "Collapsible.Content";

export interface CollapsibleItemProps
  extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  current?: boolean;
  asChild?: boolean;
}

const Item = React.forwardRef<HTMLAnchorElement, CollapsibleItemProps>(
  ({ children, current, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "py-2 pl-8 pr-4 flex gap-2 rounded-[4px]",
          !current && "hover:bg-surface-muted2",
          current && "bg-surface-muted1 font-medium",
        )}
      >
        {children}
      </Comp>
    );
  },
);
Item.displayName = "Collapsible.Item";

const Collapsible = {
  Container,
  Trigger,
  Content,
  Item,
};

export default Collapsible;

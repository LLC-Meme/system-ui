"use client";

import React, { useState, createContext, useContext } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";
import { ChevronRight } from "lucide-react";


const CollapsibleContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});


export interface CollapsibleContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, CollapsibleContainerProps>(({
  children,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CollapsibleContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "relative"
        )}
      >
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
});
Container.displayName = "Collapsible.Container";


export interface CollapsibleTriggerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Trigger = React.forwardRef<HTMLDivElement, CollapsibleTriggerProps>(({
  children,
  ...props
}, ref) => {
  const { isOpen, setIsOpen } = useContext(CollapsibleContext);
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "py-2 px-4 flex items-center justify-between rounded-[4px] cursor-pointer hover:bg-surface-muted2"
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-2">
        {children}
      </div>
      <ChevronRight
        strokeWidth={3}
        className={cn(
          "w-5 h-5 text-info",
          "transition-transform",
          isOpen && "transform rotate-90"
        )}
      />
    </div>
  );
});
Trigger.displayName = "Collapsible.Trigger";



export interface CollapsibleContentProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Content = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(({
  children,
  ...props
}, ref) => {
  const { isOpen } = useContext(CollapsibleContext);
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "w-full overflow-hidden transform origin-top",
        isOpen
          ? "max-h-96 scale-y-100"
          : "max-h-0 scale-y-0",
      )}
    >
      {children}
    </div>
  );
});
Content.displayName = "Collapsible.Content";



export interface CollapsibleItemProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  current?: boolean;
  asChild?: boolean;
}

const Item = React.forwardRef<HTMLAnchorElement, CollapsibleItemProps>(({
  children,
  current,
  asChild,
  ...props
}, ref) => {
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
});
Item.displayName = "Collapsible.Item";


const Collapsible = {
  Container,
  Trigger,
  Content,
  Item,
};

export default Collapsible;
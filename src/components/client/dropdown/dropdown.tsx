"use client";

import * as React from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import { cn } from "../../../lib/cn";
import * as D from "../../server/divider/divider";

const Root = RadixDropdown.Root;
const Trigger = RadixDropdown.Trigger;
const Sub = RadixDropdown.Sub;

const SubTrigger = React.forwardRef<
  React.ComponentRef<typeof RadixDropdown.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixDropdown.SubTrigger> & {
    inset?: boolean;
    variant?: "default" | "danger" | "info";
  }
>(({ className, inset, children, variant = "info", ...props }, ref) => {
  return (
    <RadixDropdown.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default gap-2 select-none items-center px-4 py-2 outline-none focus:bg-surface-muted2 data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        variant === "info" && "text-info",
        variant === "danger" && "text-alert",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto text-info" />
    </RadixDropdown.SubTrigger>
  );
});
SubTrigger.displayName = "Dropdown.SubTrigger";

const SubContent = React.forwardRef<
  React.ComponentRef<typeof RadixDropdown.SubContent>,
  React.ComponentPropsWithoutRef<typeof RadixDropdown.SubContent>
>(({ className, children, ...props }, ref) => {
  return (
    <RadixDropdown.Portal>
      <RadixDropdown.SubContent
        ref={ref}
        className={cn(
          "z-40 min-w-[8rem] overflow-hidden rounded-lg bg-surface data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      >
        {children}
      </RadixDropdown.SubContent>
    </RadixDropdown.Portal>
  );
});
SubContent.displayName = "Dropdown.SubContent";

const Group = React.forwardRef<
  React.ComponentRef<typeof RadixDropdown.Group>,
  React.ComponentPropsWithoutRef<typeof RadixDropdown.Group>
>(({ className, children, ...props }, ref) => {
  return (
    <RadixDropdown.Group ref={ref} className={cn(className)} {...props}>
      {children}
    </RadixDropdown.Group>
  );
});
Group.displayName = "Dropdown.Group";

const Content = React.forwardRef<
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
            "z-50 min-w-[8rem] overflow-hidden rounded-lg bg-surface data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
          )}
          {...props}
        />
      </RadixDropdown.Portal>
    </RadixDropdown.Group>
  );
});
Content.displayName = "Dropdown.Content";

const Item = React.forwardRef<
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
Item.displayName = "Dropdown.Item";

const Divider = () => {
  return <D.default.H thickness={1} />;
};
Divider.displayName = "Dropdown.Divider";

const Dropdown = {
  Root,
  Trigger,
  Sub,
  SubTrigger,
  SubContent,
  Content,
  Item,
  Divider,
};
export default Dropdown;

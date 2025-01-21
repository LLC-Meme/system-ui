import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";


export interface SidebarItemProps extends React.ComponentPropsWithoutRef<"a"> {
  current?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

const Item = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(({
  current,
  asChild,
  children,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "py-2 px-4 flex gap-2 rounded-[4px]",
        !current && "hover:bg-surface-muted2",
        current && "bg-surface-muted1 font-medium"
      )}
    >
      {children}
    </Comp>
  );
});
Item.displayName = "Sidebar.Item";



export interface SidebarGroupLabelProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const GroupLabel = React.forwardRef<HTMLDivElement, SidebarGroupLabelProps>(({
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="font-semibold text-foreground-muted mb-2"
    >
      {children}
    </div>
  );
});
GroupLabel.displayName = "Sidebar.GroupLabel";


export interface SidebarGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Group = React.forwardRef<HTMLDivElement, SidebarGroupProps>(({
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
Group.displayName = "Sidebar.Group";



export interface SidebarContainerProps extends React.ComponentPropsWithoutRef<"aside"> {
  children: React.ReactNode;
  isOpen: boolean;
}

const Container = React.forwardRef<HTMLElement, SidebarContainerProps>(({
  children,
  isOpen,
  ...props
}, ref) => {
  return (
    <aside
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "fixed top-16 left-0",
        "min-h-screen p-6 flex flex-col gap-8 bg-surface border-r border-border",
        "transform transition-transform",
        isOpen
          ? "translate-x-0"
          : "-translate-x-full"
      )}
    >
      {children}
    </aside>
  );
});
Container.displayName = "Sidebar.Container";


const Sidebar = {
  Item,
  GroupLabel,
  Group,
  Container
};

export default Sidebar;
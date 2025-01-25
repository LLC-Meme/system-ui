import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";
import { ChevronRight } from "lucide-react";

function Separator() {
  return (
    <ChevronRight
      size={24}
      className="w-3 h-3 color-foreground mt-1"
      aria-label="breadcrumb-separator"
    />
  );
}
Separator.displayName = "Breadcrumb.Separator";

export interface BreadcrumbItemProps
  extends React.ComponentPropsWithoutRef<"a"> {
  current?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

const Item = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ current, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <li ref={ref} className="list-none center">
        <Comp
          {...props}
          className={cn(
            "text-info text-sm",
            !current && "hover:underline",
            current && "font-semibold",
            "hover:cursor-pointer",
          )}
        >
          {children}
        </Comp>
      </li>
    );
  },
);
Item.displayName = "Breadcrumb.Item";

export interface BreadcrumbContainerProps {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLOListElement, BreadcrumbContainerProps>(
  ({ children }, ref) => {
    return (
      <ol ref={ref} className="flex gap-2">
        {children}
      </ol>
    );
  },
);
Container.displayName = "Breadcrumb.Container";

const Breadcrumb = {
  Separator,
  Item,
  Container,
};

export default Breadcrumb;

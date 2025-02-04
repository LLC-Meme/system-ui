import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";
import { ChevronRight } from "lucide-react";

function BreadcrumbSeparator() {
  return (
    <ChevronRight
      size={24}
      className="w-3 h-3 color-foreground mt-1"
      aria-label="breadcrumb-separator"
    />
  );
}
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export interface BreadcrumbItemProps
  extends React.ComponentPropsWithoutRef<"a"> {
  current?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
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
BreadcrumbItem.displayName = "Breadcrumb.Item";

export interface BreadcrumbContainerProps {
  children: React.ReactNode;
}

const BreadcrumbContainer = React.forwardRef<
  HTMLOListElement,
  BreadcrumbContainerProps
>(({ children }, ref) => {
  return (
    <ol ref={ref} className="flex gap-2">
      {children}
    </ol>
  );
});
BreadcrumbContainer.displayName = "Breadcrumb.Container";

export { BreadcrumbItem, BreadcrumbContainer, BreadcrumbSeparator };

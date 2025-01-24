import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";
import { ChevronRight, LucideProps } from "lucide-react";

export interface BreadcrumbSeparatorProps extends LucideProps {}

function Separator () {
  return (
    <ChevronRight
      size={24}
      className="w-4 h-4 color-foreground mt-[5px]"
      aria-label="breadcrumb-separator"
    />
  );
};
Separator.displayName = "Breadcrumb.Separator";


export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<"a"> {
  current?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

const Item = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(({
  current,
  children,
  asChild,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <li
      ref={ref}
      className="list-none"
    >
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
});
Item.displayName = "Breadcrumb.Item";


export interface BreadcrumbContainerProps {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLOListElement, BreadcrumbContainerProps>(({ children }, ref) => {
  return (
    <ol ref={ref} className="flex gap-2">
      {children}
    </ol>
  );
});
Container.displayName = "Breadcrumb.Container";


const Breadcrumb = {
  Separator,
  Item,
  Container
};

export default Breadcrumb;
import React from "react";
import { cn } from "../../utils/cn";
import Arrow from "../arrow/arrow";

export interface BreadcrumbSeparatorProps {}

const Separator = React.forwardRef<SVGSVGElement, BreadcrumbSeparatorProps>(({}, ref) => {
  return (
    <Arrow.Right ref={ref} className="fill-foreground" />
  );
});

export interface BreadcrumbItemProps {
  current?: boolean;
  children: React.ReactNode;
}

const Item = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(({
  current,
  children,
}, ref) => {
  return (
    <li
      ref={ref}
      className={cn(
        "text-info text-sm",
        !current && "hover:underline",
        current && "font-semibold",
        "hover:cursor-pointer",
        "list-none"
      )}
    >
      {children}
    </li>
  );
});


export interface BreadcrumbContainerProps {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLOListElement, BreadcrumbContainerProps>(({ children }, ref) => {
  return (
    <ol ref={ref} className="flex items-center gap-2">
      {children}
    </ol>
  );
});

const Breadcrumb = {
  Separator,
  Item,
  Container
};

export default Breadcrumb;
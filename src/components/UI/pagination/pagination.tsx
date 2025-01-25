import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";
import { ChevronLeft, ChevronRight, Ellipsis as LucideEllipsis } from "lucide-react";


export interface PaginationContainerProps extends React.ComponentPropsWithoutRef<"nav"> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLElement, PaginationContainerProps>(({
  children,
}, ref) => {
  return (
    <nav
      ref={ref}
      className="flex items-center gap-1"
    >
      {children}
    </nav>
  );
});
Container.displayName = "Pagination.Container";



export interface PaginationItemProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  current?: boolean;
  asChild?: boolean;
}

const Item = React.forwardRef<HTMLAnchorElement, PaginationItemProps>(({
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
        "center w-8 h-8 rounded-[4px] text-info",
        "hover:cursor-pointer",
        current && "bg-info text-on-status hover",
        !current && "hover:bg-info-muted",
      )}
    >
      {children}
    </Comp>
  );
});
Item.displayName = "Pagination.Item";



export interface PaginationButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"a">, "as"> {
  as?: React.ElementType;
  disabled?: boolean;
}

const Prev = React.forwardRef<HTMLAnchorElement, PaginationButtonProps>(({
  as: Tag = "a",
  disabled,
  ...props
}, ref) => {

  return (
    <Tag
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "center w-8 h-8 rounded-[4px] text-info",
        "center w-8 h-8 rounded-[4px] text-info",
        disabled && "opacity-[var(--disabled-opacity)] cursor-auto",
        !disabled && "hover:bg-info-muted hover:cursor-pointer"
      )}
      aria-label="pagination-prev"
    >
      <ChevronLeft className="w-6 h-6 text-info" />
    </Tag>
  );
});
Prev.displayName = "Pagination.Prev";



const Next = React.forwardRef<HTMLAnchorElement, PaginationButtonProps>(({
  as: Tag = "a",
  disabled,
  ...props
}, ref) => {
  return (
    <Tag
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "center w-8 h-8 rounded-[4px] text-info",
        disabled && "opacity-[var(--disabled-opacity)] cursor-auto",
        !disabled && "hover:bg-info-muted hover:cursor-pointer"
      )}
      aria-label="pagination-next"
    >
      <ChevronRight className="w-6 h-6 text-info" />
    </Tag>
  );
});
Next.displayName = "Pagination.Next";



function Ellipsis() {
  return (
    <div
      className="w-8 h-8 center"
      aria-label="pagination-ellipsis"
    >
      <LucideEllipsis className="w-6 h-6 text-info" />
    </div>
  );
};
Ellipsis.displayName = "Pagination.Ellipsis";


const Pagination = {
  Container,
  Prev,
  Next,
  Item,
  Ellipsis
};

export default Pagination;
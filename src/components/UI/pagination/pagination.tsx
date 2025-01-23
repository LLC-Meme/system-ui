import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";
import Arrow from "../../symbol/arrow/arrow";


export interface PaginationContainerProps {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, PaginationContainerProps>(({
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
        "hover:bg-info-muted hover:cursor-pointer",
        current && "border border-info"
      )}
    >
      {children}
    </Comp>
  );
});
Item.displayName = "Pagination.Item";



export interface PaginationButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  asChild?: boolean;
}

const Prev = React.forwardRef<HTMLAnchorElement, PaginationButtonProps>(({
  asChild,
}, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn(
        "center w-8 h-8 rounded-[4px] text-info",
        "hover:bg-info-muted hover:cursor-pointer",
      )}
      aria-label="pagination-prev"
    >
      <Arrow.Left className="w-2 h-auto fill-info" />
    </Comp>
  );
});
Prev.displayName = "Pagination.Prev";



const Next = React.forwardRef<HTMLAnchorElement, PaginationButtonProps>(({
  asChild,
}, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn(
        "center w-8 h-8 rounded-[4px] text-info",
        "hover:bg-info-muted hover:cursor-pointer",
      )}
      aria-label="pagination-next"
    >
      <Arrow.Right className="w-2 h-auto fill-info" />
    </Comp>
  );
});
Next.displayName = "Pagination.Next";



const Ellipsis = React.forwardRef<HTMLDivElement, {}>(({}, ref) => {
  return (
    <div
      ref={ref}
      className="w-8 h-8 center"
    >
      <svg className="w-4 h-auto" width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 0C3.45 0 3 0.45 3 1C3 1.55 3.45 2 4 2C4.55 2 5 1.55 5 1C5 0.45 4.55 0 4 0ZM7 0C6.45 0 6 0.45 6 1C6 1.55 6.45 2 7 2C7.55 2 8 1.55 8 1C8 0.45 7.55 0 7 0ZM1 0C0.45 0 0 0.45 0 1C0 1.55 0.45 2 1 2C1.55 2 2 1.55 2 1C2 0.45 1.55 0 1 0Z"
          className="fill-info"
        />
      </svg>
    </div>
  );
});
Ellipsis.displayName = "Pagination.Ellipsis";


const Pagination = {
  Container,
  Prev,
  Next,
  Item,
  Ellipsis
};

export default Pagination;
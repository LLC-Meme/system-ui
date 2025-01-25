import React from "react";
import { cn } from "../../../lib/cn";
import { Search } from "lucide-react";

export interface SearchWindowContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, SearchWindowContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "relative bg-surface-muted1 h-8 rounded-lg",
        )}
      >
        <MagnifyingGlass className="absolute top-1/2 left-2 transform -translate-y-1/2" />
        {children}
      </div>
    );
  },
);
Container.displayName = "SearchWindow.Container";

function MagnifyingGlass({ className }: { className: string }) {
  return <Search className={cn(className, "pointer-events-none w-5 h-5")} />;
}

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "w-full h-full bg-transparent rounded-lg",
        "pl-9 pr-2 outline-none",
        "focus:border focus:border-info focus:pl-[35px]",
        "placeholder:text-foreground-muted",
      )}
    />
  );
});
Input.displayName = "SearchWindow.Input";

const SearchWindow = {
  Container,
  Input,
};

export default SearchWindow;

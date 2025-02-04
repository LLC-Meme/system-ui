import * as React from "react";
import { cn } from "../../../lib/cn";
import { Search } from "lucide-react";

export interface SearchWindowContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const SearchWindowContainer = React.forwardRef<
  HTMLDivElement,
  SearchWindowContainerProps
>(({ children, ...props }, ref) => {
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
});
SearchWindowContainer.displayName = "SearchWindowContainer";

function MagnifyingGlass({ className }: { className: string }) {
  return <Search className={cn(className, "pointer-events-none w-5 h-5")} />;
}

export default SearchWindowContainer;

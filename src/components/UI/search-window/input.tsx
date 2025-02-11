import * as React from "react";
import { cn } from "../../../lib/cn";

/**
 * 検索ウィンドウの`<input>`要素
 */
const SearchWindowInput = React.forwardRef<
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
SearchWindowInput.displayName = "SearchWindowInput";

export default SearchWindowInput;

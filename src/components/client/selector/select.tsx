"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";
import SelectorDefaultOption from "./default-option";

export interface SelectorSelectProps
  extends React.ComponentPropsWithoutRef<"select"> {
  children: React.ReactNode;
}

/**
 * セレクターの選択肢をラッピングするコンポーネント
 */
const SelectorSelect = React.forwardRef<HTMLSelectElement, SelectorSelectProps>(
  ({ children, ...props }, ref) => {
    const [isDefault, setIsDefault] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (props.onChange) {
        props.onChange(event);
      }
      setIsDefault(event.target.value === "");
    };

    const hasDefaultOption = React.Children.toArray(children).some(
      (child) =>
        React.isValidElement(child) && child.type === SelectorDefaultOption,
    );

    React.useEffect(() => {
      if (!hasDefaultOption) {
        setIsDefault(false);
      }
    }, [hasDefaultOption]);

    return (
      <div className="relative">
        <select
          ref={ref}
          {...props}
          onChange={handleChange}
          className={cn(
            props.className,
            "appearance-none bg-transparent outline-none cursor-pointer",
            "px-4 py-2",
            "border border-border rounded-lg",
            "focus:border-info",
            "invalid:border-alert",
            isDefault ? "text-foreground-muted" : "text-foreground",
          )}
        >
          {children}
        </select>
        <div
          className={cn(
            "absolute top-1/2 right-4",
            "w-2 h-2 border-t border-r border-foreground-muted",
            "transform -translate-y-1/2 rotate-[135deg]",
            "pointer-events-none",
          )}
        />
      </div>
    );
  },
);
SelectorSelect.displayName = "SelectorSelect";

export default SelectorSelect;

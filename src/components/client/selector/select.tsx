"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";

export interface SelectorSelectProps
  extends React.ComponentPropsWithoutRef<"select"> {
  children: React.ReactNode;
}

/**
 * セレクターの選択肢をラッピングするコンポーネント
 */
const SelectorSelect = React.forwardRef<HTMLSelectElement, SelectorSelectProps>(
  ({ children, onChange, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(
      props.defaultValue !== undefined ? props.defaultValue : "",
    );

    const currentValue =
      props.value !== undefined ? props.value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (props.value === undefined) {
        setInternalValue(e.target.value);
      }
      if (onChange) {
        onChange(e);
      }
    };

    const isEmptyOption = currentValue === "";

    return (
      <div className="relative">
        <select
          ref={ref}
          onChange={handleChange}
          {...props}
          className={cn(
            props.className,
            "appearance-none bg-transparent outline-none cursor-pointer",
            "px-4 py-2",
            "border border-border rounded-lg",
            "focus:border-info",
            "invalid:border-alert",
            isEmptyOption ? "text-foreground-muted" : "text-foreground",
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

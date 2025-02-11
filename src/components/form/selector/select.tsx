import * as React from "react";
import { cn } from "../../../lib/cn";
import styles from "./selector.module.css";

export interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  children: React.ReactNode;
}

/**
 * セレクターの選択肢をラッピングするコンポーネント
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          {...props}
          className={cn(
            props.className,
            styles.select,
            "appearance-none bg-transparent outline-none cursor-pointer",
            "px-4 py-2",
            "border border-border rounded-lg",
            "focus:border-info",
            "invalid:border-alert",
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
Select.displayName = "Select";

export default Select;

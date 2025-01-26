"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";

export interface SelectorSelectProps
  extends React.ComponentPropsWithoutRef<"select"> {
  children: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectorSelectProps>(
  ({ children, ...props }, ref) => {
    const [isDefault, setIsDefault] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (props.onChange) {
        props.onChange(event);
      }
      setIsDefault(event.target.value === "");
    };

    const hasDefaultOption = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === DefaultOption,
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
Select.displayName = "Selector.Select";

export interface SelectorOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

const Option = React.forwardRef<HTMLOptionElement, SelectorOptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <option ref={ref} {...props}>
        {children}
      </option>
    );
  },
);
Option.displayName = "Selector.Option";

const DefaultOption = React.forwardRef<HTMLOptionElement, SelectorOptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <option ref={ref} disabled selected {...props}>
        {children}
      </option>
    );
  },
);
DefaultOption.displayName = "Selector.DefaultOption";

const Selector = {
  Select,
  Option,
  DefaultOption,
};

export default Selector;

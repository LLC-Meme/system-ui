import React from "react";
import { cn } from "../../../lib/cn";

export interface SelectorSelectProps extends React.ComponentPropsWithoutRef<"select"> {
  children: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectorSelectProps>(({
  children,
  ...props
}, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "appearance-none bg-transparent outline-none cursor-pointer",
          "px-4 py-2",
          "border border-border rounded-lg",
          "focus:border-info",
        )}
      >
        {children}
      </select>
      <div className={cn(
        "absolute top-1/2 right-4",
        "w-2 h-2 border-t border-r border-foreground-muted",
        "transform -translate-y-1/2 rotate-[135deg]",
        "pointer-events-none"
      )}/>
    </div>
  );
});
Select.displayName = "Selector.Select";



export interface SelectorOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

const Option = React.forwardRef<HTMLOptionElement, SelectorOptionProps>(({
  children,
  ...props
}, ref) => {
  return (
    <option
      ref={ref}
      {...props}
    >
      {children}
    </option>
  );
});
Option.displayName = "Selector.Option";


const Selector = {
  Select,
  Option
};

export default Selector;
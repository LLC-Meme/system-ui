"use client";

import * as React from "react";

export interface SelectorDefaultOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

const SelectorDefaultOption = React.forwardRef<
  HTMLOptionElement,
  SelectorDefaultOptionProps
>(({ children, ...props }, ref) => {
  return (
    <option ref={ref} disabled selected {...props}>
      {children}
    </option>
  );
});
SelectorDefaultOption.displayName = "SelectorDefaultOption";

export default SelectorDefaultOption;

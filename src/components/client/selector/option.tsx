"use client";

import * as React from "react";

export interface SelectorOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

/**
 * セレクターの選択肢
 */
const SelectorOption = React.forwardRef<HTMLOptionElement, SelectorOptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <option ref={ref} {...props}>
        {children}
      </option>
    );
  },
);
SelectorOption.displayName = "SelectorOption";

export default SelectorOption;

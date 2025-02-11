import * as React from "react";

export interface OptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

/**
 * セレクターの選択肢
 */
const Option = React.forwardRef<HTMLOptionElement, OptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <option ref={ref} {...props}>
        {children}
      </option>
    );
  },
);
Option.displayName = "Option";

export default Option;

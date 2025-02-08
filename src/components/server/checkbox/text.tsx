import * as React from "react";

export interface CheckboxTextProps
  extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

/**
 * Checkboxのテキスト部分
 */
const CheckboxText = React.forwardRef<HTMLSpanElement, CheckboxTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <span ref={ref} {...props}>
        {children}
      </span>
    );
  },
);
CheckboxText.displayName = "CheckboxText";

export default CheckboxText;

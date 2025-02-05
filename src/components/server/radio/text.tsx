import * as React from "react";

export interface RadioTextProps extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

const RadioText = React.forwardRef<HTMLSpanElement, RadioTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <span ref={ref} {...props}>
        {children}
      </span>
    );
  },
);
RadioText.displayName = "RadioText";

export default RadioText;

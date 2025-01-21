import React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({
  children,
  ...props
}, ref) => {
  return (
    <label ref={ref} {...props}>
      {children}
    </label>
  );
});
Label.displayName = "Label";

export default Label;
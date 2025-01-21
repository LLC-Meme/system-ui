import React from "react";

function Label({
  children,
  ...props
}: React.PropsWithChildren<React.LabelHTMLAttributes<HTMLLabelElement>>) {
  return (
    <label {...props}>
      {children}
    </label>
  );
}

export default Label;
import React from "react";
import { cn } from "../../../lib/cn";

type Thickness = 1 | 2 | 3;
export interface DividerProps extends React.ComponentPropsWithoutRef<"hr"> {
  thickness?: Thickness;
}

const V = React.forwardRef<HTMLHRElement, DividerProps>(({
  thickness = 1,
  ...props
}, ref) => {
  return (
    <hr
      ref={ref}
      {...props}
      style={{
        width: `${thickness}px`,
        ...props.style
      }}
      className={cn(
        props.className,
        "h-full bg-border rounded-full border-none"
      )}
    />
  );
});
V.displayName = "Divider.V";

const H = React.forwardRef<HTMLHRElement, DividerProps>(({
  thickness = 1,
  ...props
}, ref) => {
  return (
    <hr
      ref={ref}
      {...props}
      style={{
        height: `${thickness}px`,
        ...props.style
      }}
      className={cn(
        props.className,
        "w-full bg-border rounded-full border-none"
      )}
    />
  );
});
H.displayName = "Divider.H";


const Divider = {
  V,
  H
};
export default Divider;
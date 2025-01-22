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
      className={cn(
        props.className,
        `h-full w-[${thickness}px]`,
        "bg-border rounded-full"
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
      className={cn(
        props.className,
        `w-full h-[${thickness}px]`,
        "bg-border rounded-full"
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
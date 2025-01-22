import React from "react";
import { cn } from "../../../lib/cn";


type Unit = 1 | 2 | 3 | 4 | 5 | 6;

export interface SpacerProps extends React.ComponentPropsWithoutRef<"div"> {
  unit?: Unit;
}

const V = React.forwardRef<HTMLDivElement, SpacerProps>(({
  unit = 1,
  ...props
}, ref) => {
  const size = unit * 4;
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        `h-${size}`
      )}
    />
  );
});
V.displayName = "Spacer.V";


const H = React.forwardRef<HTMLDivElement, SpacerProps>(({
  unit = 1,
  ...props
}, ref) => {
  const size = unit * 4;
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        `w-${size}`
      )}
    />
  );
});
H.displayName = "Spacer.H";


const Spacer = {
  V,
  H
};

export default Spacer;
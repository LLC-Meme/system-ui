import React from "react";
import { cn } from "../../utils/cn";

interface Props extends React.SVGProps<SVGSVGElement> {};

const Cross = React.forwardRef<SVGSVGElement, Props>(({
  ...props
}, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      className={cn(props.className, "fill-foreground hover:fill-foreground-muted")}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.79467 0.229334L3.966 3.05733L1.138 0.229334L0.195335 1.172L3.02334 4L0.195335 6.828L1.138 7.77067L3.966 4.94267L6.79467 7.77067L7.73734 6.828L4.90934 4L7.73734 1.172L6.79467 0.229334Z" />
    </svg>
  );
});

export default Cross;
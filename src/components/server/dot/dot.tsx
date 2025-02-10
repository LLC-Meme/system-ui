import * as React from "react";
import { cn } from "../../../lib/cn";
import { type Color } from "../../../types";

export interface DotProps extends React.ComponentPropsWithoutRef<"div"> {
  color: Color;
}

/**
 * ドットコンポーネント
 * @param {string} color 色
 */
const Dot = React.forwardRef<HTMLDivElement, DotProps>(
  ({ color, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "w-2 h-2 rounded-full",
          color === "red" && "bg-alert",
          color === "orange" && "bg-warning",
          color === "green" && "bg-success",
          color === "blue" && "bg-info",
          color === "yellow" && "bg-yellow",
          color === "mint" && "bg-mint",
          color === "teal" && "bg-teal",
          color === "cyan" && "bg-cyan",
          color === "indigo" && "bg-indigo",
          color === "purple" && "bg-purple",
          color === "pink" && "bg-pink",
          color === "brown" && "bg-brown",
        )}
      />
    );
  },
);
Dot.displayName = "Dot";

export default Dot;

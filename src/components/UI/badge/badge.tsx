import * as React from "react";
import { cn } from "../../../lib/cn";
import { type Color } from "../../../types/color";

export interface BadgeProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  /** バッジの色  */
  color: Color;
}

/**
 * バッジコンポーネント
 * @param {Color} color バッジの色
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ color, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "w-fit py-1 px-4 rounded-full flex items-center gap-1 font-semibold",
          color === "red" && "bg-alert-muted text-alert",
          color === "orange" && "bg-warning-muted text-warning",
          color === "green" && "bg-success-muted text-success",
          color === "blue" && "bg-info-muted text-info",
          color === "yellow" && "bg-yellow-muted text-yellow",
          color === "mint" && "bg-mint-muted text-mint",
          color === "teal" && "bg-teal-muted text-teal",
          color === "cyan" && "bg-cyan-muted text-cyan",
          color === "indigo" && "bg-indigo-muted text-indigo",
          color === "purple" && "bg-purple-muted text-purple",
          color === "pink" && "bg-pink-muted text-pink",
          color === "brown" && "bg-brown-muted text-brown",
        )}
      >
        {children}
      </div>
    );
  },
);
Badge.displayName = "Badge";

export default Badge;

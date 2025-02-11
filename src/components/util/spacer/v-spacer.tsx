import * as React from "react";
import { cn } from "../../../lib/cn";
import { type SpacerProps } from "./type";

/**
 * 垂直方向のスペーサー
 * デフォルトは4px
 * @param {number} unit スペースの単位(4px)
 */
const VSpacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ unit = 1, ...props }, ref) => {
    const size = unit * 4;
    return (
      <div ref={ref} {...props} className={cn(props.className, `h-${size}`)} />
    );
  },
);
VSpacer.displayName = "VSpacer";

export default VSpacer;

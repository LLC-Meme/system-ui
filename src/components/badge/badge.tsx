import React from "react";
import { cn } from "../../cn";

export interface BadgeProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  /** ボタンの色  */
  color: Color;
}

type Color =
  "red" |
  "orange" |
  "yellow" |
  "green" |
  "mint" |
  "teal" |
  "cyan" |
  "blue" |
  "indigo" |
  "purple" |
  "pink" |
  "brown";

const Badge = React.forwardRef(({
  color,
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & {
  color: Color
}) => {
  return (
    <div
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
});

export default Badge;
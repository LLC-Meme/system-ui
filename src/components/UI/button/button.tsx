import * as React from "react";
import { cn } from "../../../lib/cn";
import { Slot } from "@radix-ui/react-slot";

type ButtonVariant = "default" | "danger" | "outline" | "danger-outline";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /** ボタンのデザインバリアント */
  variant?: ButtonVariant;
  /** ボタンの中身 */
  children: React.ReactNode;
  /** クラス名 */
  className?: string;
  /** ボタン以外の要素を使う場合（a, div, etc.）にtrueを指定します。 */
  asChild?: boolean;
}

/**
 * ボタンコンポーネント
 * @param {ButtonVariant} variant ボタンのデザインバリアント
 * @param {boolean} asChild ボタン以外の要素を使う場合（a, div, etc.）にtrueを指定します。
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", children, className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={!asChild ? ref : undefined}
        {...props}
        className={cn(
          className,
          variant === "default" && "bg-info text-on-status",
          variant === "danger" && "bg-alert text-on-status",
          variant === "outline" && "border border-info text-info",
          variant === "danger-outline" && "border border-alert text-alert",
          "px-6 py-2 font-bold rounded-lg flex items-center justify-center",
          "hover disabled",
          "focus:outline-offset-2 focus:outline-info",
          !props.disabled && "active:scale-[99%] transition-transform",
        )}
      >
        {children}
      </Component>
    );
  },
);
Button.displayName = "Button";

export default Button;

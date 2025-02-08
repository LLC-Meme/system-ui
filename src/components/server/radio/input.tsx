import * as React from "react";
import styles from "./radio.module.css";
import { cn } from "../../../lib/cn";

/**
 * ラジオボタンのinput要素
 * ラジオボタン(◯)を表示する
 */
const RadioInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="radio"
      {...props}
      className={cn(
        props.className,
        "appearance-none cursor-pointer",
        "w-4 h-4 rounded-full",
        "border-[1.5px] border-info",
        "focus:outline-none",
        "hover disabled",
        styles.radio,
      )}
    />
  );
});
RadioInput.displayName = "RadioInput";

export default RadioInput;

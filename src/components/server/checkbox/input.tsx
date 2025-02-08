import * as React from "react";
import styles from "./checkbox.module.css";
import { cn } from "../../../lib/cn";

export interface CheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

/**
 * Checkboxのinput要素
 * チェックマーク(✅️)を表示する
 */
const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "appearance-none cursor-pointer",
          "w-4 h-4 rounded-sm",
          "border-[1.5px] border-info",
          "hover disabled",
          styles.checkbox,
        )}
      />
    );
  },
);
CheckboxInput.displayName = "CheckboxInput";

export default CheckboxInput;

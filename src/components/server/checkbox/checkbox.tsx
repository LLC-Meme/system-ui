import * as React from "react";
import styles from "./checkbox.module.css";
import { cn } from "../../../lib/cn";

export interface CheckboxBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const CheckboxBox = React.forwardRef<HTMLInputElement, CheckboxBoxProps>(
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
CheckboxBox.displayName = "CheckboxBox";

export interface CheckboxLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const CheckboxLabel = React.forwardRef<HTMLLabelElement, CheckboxLabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "cursor-pointer flex items-center gap-2",
          "hover",
        )}
      >
        {children}
      </label>
    );
  },
);
CheckboxLabel.displayName = "CheckboxLabel";

export interface CheckboxTextProps
  extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

const CheckboxText = React.forwardRef<HTMLSpanElement, CheckboxTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <span ref={ref} {...props}>
        {children}
      </span>
    );
  },
);
CheckboxText.displayName = "CheckboxText";

export interface CheckboxContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const CheckboxContainer = React.forwardRef<
  HTMLDivElement,
  CheckboxContainerProps
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(props.className, "flex flex-col gap-2")}
    >
      {children}
    </div>
  );
});
CheckboxContainer.displayName = "CheckboxContainer";

export interface CheckboxLabelTextProps
  extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

const CheckboxLabelText = React.forwardRef<
  HTMLSpanElement,
  CheckboxLabelTextProps
>(({ children, ...props }, ref) => {
  return (
    <span ref={ref} {...props} className={cn(props.className, "font-semibold")}>
      {children}
    </span>
  );
});
CheckboxLabelText.displayName = "CheckboxLabelText";

export {
  CheckboxBox,
  CheckboxLabel,
  CheckboxText,
  CheckboxContainer,
  CheckboxLabelText,
};

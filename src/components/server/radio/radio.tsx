import * as React from "react";
import styles from "./radio.module.css";
import { cn } from "../../../lib/cn";

const RadioButton = React.forwardRef<
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
RadioButton.displayName = "RadioButton";

export interface RadioLabelProps
  extends React.ComponentPropsWithoutRef<"label"> {
  children: React.ReactNode;
}

const RadioLabel = React.forwardRef<HTMLLabelElement, RadioLabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "flex items-center space-x-4 cursor-pointer hover",
        )}
      >
        {children}
      </label>
    );
  },
);
RadioLabel.displayName = "RadioLabel";

export interface RadioTextProps extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

const RadioText = React.forwardRef<HTMLSpanElement, RadioTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <span ref={ref} {...props}>
        {children}
      </span>
    );
  },
);
RadioText.displayName = "RadioText";

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(props.className, "flex flex-col gap-2")}
      >
        {children}
      </div>
    );
  },
);
RadioGroup.displayName = "RadioGroup";

export interface RadioLabelTextProps
  extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

const RadioLabelText = React.forwardRef<HTMLSpanElement, RadioLabelTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        {...props}
        className={cn(props.className, "font-semibold")}
      >
        {children}
      </span>
    );
  },
);
RadioLabelText.displayName = "RadioLabelText";

export { RadioButton, RadioLabel, RadioText, RadioGroup, RadioLabelText };

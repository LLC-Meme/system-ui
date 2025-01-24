import React from "react";
import styles from "./checkbox.module.css";
import { cn } from "../../../lib/cn";


export interface CheckboxBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Box = React.forwardRef<HTMLInputElement, CheckboxBoxProps>((props, ref) => {
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
        styles.checkbox
      )}
    />
  );
});
Box.displayName = "Checkbox.Box";


export interface CheckboxLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = React.forwardRef<HTMLLabelElement, CheckboxLabelProps>(({
  children,
  ...props
}, ref) => {
  return (
    <label
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "cursor-pointer flex items-center gap-2",
        "hover"
      )}
    >
      {children}
    </label>
  );
});
Label.displayName = "Checkbox.Label";



export interface CheckboxLabelTextProps extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

const LabelText = React.forwardRef<HTMLSpanElement, CheckboxLabelTextProps>(({
  children,
  ...props
}, ref) => {
  return (
    <span
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
});
LabelText.displayName = "Checkbox.LabelText";


const Checkbox = {
  Box,
  Label,
  LabelText,
};

export default Checkbox;
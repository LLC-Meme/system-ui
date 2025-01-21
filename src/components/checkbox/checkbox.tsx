import React from "react";
import styles from "./checkbox.module.css";
import { cn } from "../../utils/cn";
import Label from "../label/label";


export interface CheckboxBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {};

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


export interface CheckboxLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
};

const CheckboxLabel = React.forwardRef<HTMLLabelElement, CheckboxLabelProps>(({
  children,
  ...props
}, ref) => {
  return (
    <Label
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "cursor-pointer flex items-center gap-2",
        "hover"
      )}
    >
      {children}
    </Label>
  );
});


const Checkbox = {
  Box,
  Label: CheckboxLabel
};

export default Checkbox;
import React from "react";
import styles from "./checkbox.module.css";
import { cn } from "../../utils/cn";
import Label from "../label/label";

function Box({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
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
}

function CheckboxLabel({
  children,
  ...props
}: React.PropsWithChildren<React.LabelHTMLAttributes<HTMLLabelElement>>) {
  return (
    <Label
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
}


const Checkbox = {
  Box,
  Label: CheckboxLabel
};

export default Checkbox;
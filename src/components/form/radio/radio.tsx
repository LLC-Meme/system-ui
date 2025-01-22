import React from "react";
import styles from "./radio.module.css";
import { cn } from "../../../utils/cn";
import Label from "../label/label";

export interface RadioButtonProps extends React.ComponentPropsWithoutRef<"input"> {}

const Button = React.forwardRef<HTMLInputElement, RadioButtonProps>(({
  ...props
}, ref) => {
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
        styles.radio
      )}
    />
  );
});
Button.displayName = "Radio.Button";



export interface RadioLabelProps extends React.ComponentPropsWithoutRef<"label"> {
  children: React.ReactNode;
}

const RadioLabel = React.forwardRef<HTMLLabelElement, RadioLabelProps>(({
  children,
  ...props
}, ref) => {
  return (
    <Label
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "flex items-center space-x-4 cursor-pointer hover"
      )}
    >
      {children}
    </Label>
  );
});
RadioLabel.displayName = "Radio.Label";



export interface RadioGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Group = React.forwardRef<HTMLDivElement, RadioGroupProps>(({
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "flex flex-col space-y-2"
      )}>
      {children}
    </div>
  );
});
Group.displayName = "Radio.Group";



const Radio = {
  Button,
  Label: RadioLabel,
  Group
};

export default Radio;
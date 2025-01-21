import React from "react";
import { cn } from "../../utils/cn";


export interface TooltipContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, TooltipContainerProps>(({
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "relative group")}
      >
      {children}
    </div>
  );
});



export interface TooltipTriggerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Trigger = React.forwardRef<HTMLDivElement, TooltipTriggerProps>(({
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
Trigger.displayName = "Tooltip.Trigger";



export interface TooltipContentProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Content = React.forwardRef<HTMLDivElement, TooltipContentProps>(({
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        `h-8 px-4 center absolute top-[-40px] left-1/2 overlay rounded-[4px] overflow-hidden border border-border`,
        "transform -translate-x-1/2",
        "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
      )}
    >
      {children}
    </div>
  );
});
Content.displayName = "Tooltip.Content";

const Tooltip = {
  Container,
  Trigger,
  Content,
};


export default Tooltip;
import React from "react";
import { cn } from "../../../lib/cn";

export interface SearchWindowContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, SearchWindowContainerProps>(({
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        props.className,
        "relative bg-surface-muted1 h-8 rounded-lg"
      )}
    >
      <MagnifyingGlass className="absolute top-1/2 left-2 transform -translate-y-1/2" />
      {children}
    </div>
  );
});
Container.displayName = "SearchWindow.Container";


function MagnifyingGlass({
  className
}: {
  className: string;
}) {
  return (
    <svg className={cn(className, "pointer-events-none")} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.33333 14C8.87167 14 10.2858 13.4708 11.4142 12.5933L15.0775 16.2567L16.2558 15.0783L12.5925 11.415C13.4708 10.2858 14 8.87167 14 7.33333C14 3.6575 11.0092 0.666668 7.33333 0.666668C3.6575 0.666668 0.666668 3.6575 0.666668 7.33333C0.666668 11.0092 3.6575 14 7.33333 14ZM7.33333 2.33333C10.0908 2.33333 12.3333 4.57583 12.3333 7.33333C12.3333 10.0908 10.0908 12.3333 7.33333 12.3333C4.57583 12.3333 2.33333 10.0908 2.33333 7.33333C2.33333 4.57583 4.57583 2.33333 7.33333 2.33333Z"
        className="fill-foreground-muted"
      />
    </svg>
  );
}


export interface SearchWindowInputProps extends React.ComponentPropsWithoutRef<"input"> {}

const Input = React.forwardRef<HTMLInputElement, SearchWindowInputProps>(({
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "w-full h-full bg-transparent rounded-lg",
        "pl-8 focus:pl-[31px] pr-2",
        "focus:border-info focus:border",
        "placeholder:text-foreground-muted",
        "outline-none"
      )}
    />
  );
});
Input.displayName = "SearchWindow.Input";


const SearchWindow = {
  Container,
  Input
};

export default SearchWindow;
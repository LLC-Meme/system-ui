import React from "react";
import { cn } from "../../../lib/cn";

export interface PageTitleProps extends React.ComponentPropsWithoutRef<"h1"> {
  children: React.ReactNode;
}


const Page = React.forwardRef<HTMLHeadingElement, PageTitleProps>(({
  children,
  ...props
}, ref) => {
  return (
    <h1
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "text-xl font-bold text-foreground"
      )}
    >
      {children}
    </h1>
  );
});
Page.displayName = "Title.Page";

export interface SectionTitleProps extends React.ComponentPropsWithoutRef<"h2"> {
  children: React.ReactNode;
}



const Section = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(({
  children,
  ...props
}, ref) => {
  return (
    <h2
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "text-lg font-bold text-foreground"
      )}
    >
      {children}
    </h2>
  );
});
Section.displayName = "Title.Section";



export interface BlockTitleProps extends React.ComponentPropsWithoutRef<"h3"> {
  children: React.ReactNode;
}

const Block = React.forwardRef<HTMLHeadingElement, BlockTitleProps>(({
  children,
  ...props
}, ref) => {
  return (
    <h3
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "text-md font-bold text-foreground"
      )}
    >
      {children}
    </h3>
  );
});
Block.displayName = "Title.Block";


const Title = {
  Page,
  Section,
  Block,
};
export default Title;
import React from "react";
import { cn } from "../../../lib/cn";


export interface SurfaceProps extends React.ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
}


const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(({
  children,
  ...props
}, ref) => {
  return (
    <section
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "bg-surface rounded-2xl px-8 py-6"
      )}
    >
      {children}
    </section>
  );
});
Surface.displayName = "Surface";


export default Surface;
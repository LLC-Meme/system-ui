import * as React from "react";

const Empty = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});
Empty.displayName = "Empty";

export default Empty;

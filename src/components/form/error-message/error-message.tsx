import * as React from "react";
import { cn } from "../../../lib/cn";
import { OctagonAlert } from "lucide-react";

export interface ErrorMessageProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const ErrorMessage = React.forwardRef<HTMLDivElement, ErrorMessageProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "text-alert flex items-center text-sm font-medium",
        )}
      >
        <OctagonAlert size={24} className="w-4 h-4 inline-block mr-1" />
        {children}
      </div>
    );
  },
);
ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;

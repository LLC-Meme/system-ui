import * as React from "react";
import { cn } from "../../../lib/cn";

export interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  variant: "info" | "success" | "warning" | "danger";
}

/**
 * アラートコンポーネント
 * @param {string} variant 色のバリエーション
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ children, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          props.className,
          variant === "info" && "bg-info-muted text-info",
          variant === "success" && "bg-success-muted text-success",
          variant === "warning" && "bg-warning-muted text-warning",
          variant === "danger" && "bg-alert-muted text-alert",
          "rounded-lg py-2 px-4 flex items-center font-medium",
        )}
      >
        {variant === "info" && (
          <svg
            className="w-8 h-8 inline-block mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        )}
        {variant === "success" && (
          <svg
            className="w-8 h-8 inline-block mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        )}
        {variant === "warning" && (
          <svg
            className="w-8 h-8 inline-block mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        )}
        {variant === "danger" && (
          <svg
            className="w-8 h-8 inline-block mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 16h.01" />
            <path d="M12 8v4" />
            <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
          </svg>
        )}
        {children}
      </div>
    );
  },
);
Alert.displayName = "Alert";

export default Alert;

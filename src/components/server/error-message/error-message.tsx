import * as React from "react";
import { cn } from "../../../lib/cn";

export interface ErrorMessageProps
  extends React.ComponentPropsWithoutRef<"div"> {
  message?: string | undefined | null;
}

/**
 * エラーメッセージを表示するコンポーネント
 * メッセージがない場合は何も表示しない
 * メッセージがある場合は、アイコンとメッセージを表示する
 * @param {string} message エラーメッセージ
 */
const ErrorMessage = React.forwardRef<HTMLDivElement, ErrorMessageProps>(
  ({ message, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "h-4 text-alert flex items-center text-sm font-medium",
        )}
      >
        {!!message && (
          <>
            <svg
              className="w-4 h-4 inline-block mr-1"
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
            {message}
          </>
        )}
      </div>
    );
  },
);
ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;

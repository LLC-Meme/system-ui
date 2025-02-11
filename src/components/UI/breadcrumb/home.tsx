import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface BreadcrumbHomeProps
  extends React.ComponentPropsWithoutRef<"a"> {
  current?: boolean;
  asChild?: boolean;
}

/**
 * Breadcrumbの全てのコンポーネントをラッピングするコンポーネント
 */
const BreadcrumbHome = React.forwardRef<HTMLLIElement, BreadcrumbHomeProps>(
  ({ current, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <li ref={ref} className="list-none center">
        <Comp {...props}>
          <svg
            className="text-info w-[14px] h-[14px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={current ? "3" : "2"}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        </Comp>
      </li>
    );
  },
);
BreadcrumbHome.displayName = "BreadcrumbHome";

export default BreadcrumbHome;

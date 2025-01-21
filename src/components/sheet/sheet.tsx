import React, { useEffect } from "react";
import { cn } from "../../utils/cn";
import Cross from "../cross/cross";


export interface SheetProps extends React.ComponentPropsWithoutRef<"aside"> {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sheet = React.forwardRef<HTMLElement, SheetProps>(({
  children,
  isOpen,
  setIsOpen,
}, ref) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className={cn(
      "w-screen h-screen fixed inset-0 z-50",
      "transition-opacity",
      isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
      <div className="flex w-full h-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm">
        <div className="w-full h-full" onClick={() => setIsOpen(false)} />
        <aside
          ref={ref}
          className={cn(
            "w-[480px] h-full p-6 bg-surface border-l border-border",
            "transform transition-transform",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <Cross className="w-4 h-auto" />
            </button>
          </div>
          {children}
        </aside>
      </div>
    </div>
  );
});

export default Sheet;
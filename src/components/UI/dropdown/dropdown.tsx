import React, { useState, createContext, useContext } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../utils/cn";
import Arrow from "../../symbol/arrow/arrow";

const DropdownContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});


export interface DropdownContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, DropdownContainerProps>(({
  children,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "relative"
        )}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
});
Container.displayName = "Dropdown.Container";


export interface DropdownTriggerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Trigger = React.forwardRef<HTMLDivElement, DropdownTriggerProps>(({
  children,
  ...props
}, ref) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "py-2 px-4 flex items-center justify-between rounded-[4px] cursor-pointer hover:bg-surface-muted2"
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-2">
        {children}
      </div>
      <Arrow.Right
        className={cn(
          "w-2 h-auto fill-info",
          "transition-transform",
          isOpen && "transform rotate-90"
        )}
      />
    </div>
  );
});
Trigger.displayName = "Dropdown.Trigger";



export interface DropdownContentProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Content = React.forwardRef<HTMLDivElement, DropdownContentProps>(({
  children,
  ...props
}, ref) => {
  const { isOpen } = useContext(DropdownContext);
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "w-full overflow-hidden transform origin-top",
        isOpen
          ? "max-h-96 scale-y-100"
          : "max-h-0 scale-y-0",
      )}
    >
      {children}
    </div>
  );
});
Content.displayName = "Dropdown.Content";



export interface DropdownItemProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  current?: boolean;
  asChild?: boolean;
}

const Item = React.forwardRef<HTMLAnchorElement, DropdownItemProps>(({
  children,
  current,
  asChild,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "py-2 pl-12 pr-4 flex gap-2 rounded-[4px]",
        !current && "hover:bg-surface-muted2",
        current && "bg-surface-muted1 font-medium",
      )}
    >
      {children}
    </Comp>
  );
});
Item.displayName = "Dropdown.Item";


const Dropdown = {
  Container,
  Trigger,
  Content,
  Item,
};

export default Dropdown;
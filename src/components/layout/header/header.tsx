"use client";

import React from "react";

export interface HeaderContainerProps extends React.ComponentPropsWithoutRef<"header"> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, HeaderContainerProps>(({
  children,
  ...props
}, ref) => {
  return (
    <header
      ref={ref}
      {...props}
      className="fixed inset-0 h-16 px-6 flex items-center overlay border-b border-border z-20"
    >
      {children}
    </header>
  );
});
Container.displayName = "Header.Container";


export interface SidebarControllerProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick: () => void;
}

const SidebarController = React.forwardRef<HTMLButtonElement, SidebarControllerProps>(({
  onClick,
  ...props
}, ref) => {
  return (
    <button {...props} ref={ref} onClick={onClick} className="hover">
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-auto"
      >
        <path
          d="M3.06641 17.999H19.9609C22.0117 17.999 23.0273 16.9834 23.0273 14.9717V3.04789C23.0273 1.03617 22.0117 0.0205383 19.9609 0.0205383H3.06641C1.02539 0.0205383 0 1.0264 0 3.04789V14.9717C0 16.9932 1.02539 17.999 3.06641 17.999ZM3.08594 16.4268C2.10938 16.4268 1.57227 15.9092 1.57227 14.8936V3.12601C1.57227 2.11039 2.10938 1.59281 3.08594 1.59281H19.9414C20.9082 1.59281 21.4551 2.11039 21.4551 3.12601V14.8936C21.4551 15.9092 20.9082 16.4268 19.9414 16.4268H3.08594ZM7.44141 16.7295H8.97461V1.29984H7.44141V16.7295ZM5.56641 5.21585C5.85938 5.21585 6.12305 4.95218 6.12305 4.66898C6.12305 4.37601 5.85938 4.1221 5.56641 4.1221H3.4668C3.17383 4.1221 2.91992 4.37601 2.91992 4.66898C2.91992 4.95218 3.17383 5.21585 3.4668 5.21585H5.56641ZM5.56641 7.74515C5.85938 7.74515 6.12305 7.48148 6.12305 7.18851C6.12305 6.89554 5.85938 6.6514 5.56641 6.6514H3.4668C3.17383 6.6514 2.91992 6.89554 2.91992 7.18851C2.91992 7.48148 3.17383 7.74515 3.4668 7.74515H5.56641ZM5.56641 10.2647C5.85938 10.2647 6.12305 10.0205 6.12305 9.72757C6.12305 9.4346 5.85938 9.1807 5.56641 9.1807H3.4668C3.17383 9.1807 2.91992 9.4346 2.91992 9.72757C2.91992 10.0205 3.17383 10.2647 3.4668 10.2647H5.56641Z"
          className="fill-info"
        />
      </svg>
    </button>
  );
});
SidebarController.displayName = "Header.SidebarController";


const Header = {
  Container,
  SidebarController
};

export default Header;
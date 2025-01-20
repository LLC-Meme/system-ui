import React from "react";

export interface ArrowProps extends React.SVGProps<SVGSVGElement> {}

function Left(props: ArrowProps) {
  return (
    <svg
      className="fill-info"
      {...props}
      width="4"
      height="6"
      viewBox="0 0 4 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.705 5.295L1.415 3L3.705 0.705L3 0L0 3L3 6L3.705 5.295Z" />
    </svg>
  );
};

function Right(props: ArrowProps) {
  return (
    <svg
      {...props}
      width="4"
      height="6"
      viewBox="0 0 4 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.294998 5.295L2.585 3L0.294998 0.705L0.999998 0L4 3L0.999998 6L0.294998 5.295Z" />
    </svg>
  );
};

const Arrow = {
  Left,
  Right
};

export default Arrow;